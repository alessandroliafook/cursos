class NegociacaoService {

    constructor() {
        this._http = new HttpService();
    }

    obterNegociacoesDaSemana() {

        return this._http
            .get('/negociacoes/semana')
            .then(negociacoes => {

                return negociacoes.map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor));
            })
            .catch(erro => {
                console.log(erro);
                throw new Error('Não foi possível obter as negociações da semana!');
            });
    }

    obterNegociacoesDaSemanaPassada() {

        return this._http
            .get('/negociacoes/anterior')
            .then(negociacoes => {

                return negociacoes.map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor));
            })
            .catch(erro => {
                console.log(erro);
                throw new Error('Não foi possível obter as negociações da semana passada!');
            });
    }

    obterNegociacoesDaSemanaRetrasada() {

        return this._http
            .get('/negociacoes/retrasada')
            .then(negociacoes => {

                return negociacoes.map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor));
            })
            .catch(erro => {
                console.log(erro);
                throw new Error('Não foi possível obter as negociações da semana retrasada!');
            });
    }

    enviarNegociacao() {

        event.preventDefault();
        console.log("Enviando post");

        let $ = document.querySelector.bind(document);
        let inputData = $('#data');
        let inputQuantidade = $('#quantidade');
        let inputValor = $('#valor');

        let negociacao = {
            data: inputData.value,
            quantidade: inputQuantidade.value,
            valor: inputValor.value
        };

        return this._http.post('/negociacoes', negociacao);
    }
}