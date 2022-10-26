import {Component} from "react";
import "./Contador.css"

class ContadorSingleComponent extends Component {
    //criado objeto interno para controlar as informações do componente
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial ||  1,
    }

    //fazendo o controle através de um construtor
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         numero : props.numeroInicial
    //     }
    //no caso de ter problema com a referência, é possível forçar no construtor
    // que a função sempre trate do componente
    // this.inc = this.inc.bind(this)
    // }

    // para incrementar o valor do objeto é necessário utilizar uma função
    // para que o contexto não se perca, ela deve ser arrow, ou deve ser associada
    // através do construtor
    inc = () => {
        this.setState({
            //não é necessário atualizar ou referenciar todos os atributos do state
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            //não é necessário atualizar ou referenciar todos os atributos do state
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (evento) => {
        this.setState({
            passo: +evento.target.value,
        })
    }

    render() {
        return (
            <div className={"Contador"}>
                <h2>
                    Contador
                </h2>
                {/*<p>Valor Inicial: {this.props.numeroInicial}</p>*/}
                <h3>Valor: {this.state.numero}</h3>
                <div>
                    <label htmlFor={"passoInput"}>Passo: </label>
                    <input
                        id={"passoInput"}
                        type={"number"}
                        value={this.state.passo}
                        onChange={this.setPasso}
                    />
                </div>
                <button onClick={this.inc}>+</button>
                {/*Outra forma de evitar problema de referência é definir a função como arrow no onClick*/}
                {/*<button onClick={_ => this.inc}>+</button>*/}
                <button onClick={this.dec}>-</button>
            </div>
        );
    }
}

export default ContadorSingleComponent