import { MeuObjeto } from './MeuObjeto';

export class Negociacao implements MeuObjeto<Negociacao> {

    constructor(readonly data: Date, 
        readonly quantidade: number, 
        readonly valor: number) {}

    get volume() {

        return this.quantidade * this.valor;
    }

    paraTexto(): void {
        console.log('-- paraTexto --')
        console.log(
            `Data: ${this.data}
            Quantidade: ${this.quantidade}, 
            Valor: ${this.valor}, 
            Volume: ${this.volume}`
        )
    }

    ehIgual(negociacao: Negociacao): boolean {

        return (this.data.getDate() == negociacao.data.getDate()
                && this.data.getFullYear() == negociacao.data.getFullYear()
                && this.data.getDay() == negociacao.data.getDay()
        );
    }
}