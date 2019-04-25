import { Negociacao, Negociacoes } from '../models/index';
import { NegociacaoView, MensagemView } from '../views/index';
import { domInject, throttle } from '../helpers/decorators/index'
import { NegociacaoService } from '../services/index';
import { imprime } from '../helpers/index'

export class NegociacaoController {

    @domInject(`#data`)
    private _inputData: JQuery;

    @domInject(`#quantidade`)
    private _inputQuantidade: JQuery;

    @domInject(`#valor`)
    private _inputValor: JQuery;

    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacaoView(`#negociacoesView`);
    private _mensagemView = new MensagemView(`#mensagemView`);
    private _service = new NegociacaoService(); 

    constructor() {
        this._negociacoesView.update(this._negociacoes);
    }

    @throttle()
    adiciona() {
        
        let data = new Date(String(this._inputData.val()).replace(/-/g, ',')); 
        
        if(!this._ehDiaUtil(data)) {

            this._mensagemView.update("Somente negociacões em dias úteis, por favor!");
            return
        }        

        const negociacao = new Negociacao(
            data, 
            parseInt(String(this._inputQuantidade.val())),
            parseFloat(String(this._inputValor.val()))
            );
            
        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update(`Negociação adicionada com sucesso!`);
        
        imprime(negociacao, this._negociacoes);
    }

    private _ehDiaUtil(date: Date): boolean {

        return date.getDay() != DiaDaSemana.Domingo && date.getDay() != DiaDaSemana.Sabado;
    }

    @throttle()
    async importaDados() {

        try {
            
            const negociacoesParaImportar = await this._service
                .obterNegociacoes(res => {
    
                    if(res.ok)
                        return res;
                    else
                        throw new Error(res.statusText);
                });
                
            const negociacoesJaImportadas = this._negociacoes.paraArray();
    
            negociacoesParaImportar
                .filter(negociacao =>
                    !negociacoesJaImportadas.some(jaImportada => 
                        negociacao.ehIgual(jaImportada)))
                .forEach(negociacao => 
                    this._negociacoes.adiciona(negociacao));
    
            this._negociacoesView.update(this._negociacoes);
        
        } catch (error) {
            
            this._mensagemView.update(error.message);
        }
    }
}

enum DiaDaSemana {
    
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}