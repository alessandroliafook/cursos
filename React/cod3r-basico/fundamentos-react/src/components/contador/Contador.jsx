import {Component} from "react";
import "./Contador.css"
import Display from "./Display";
import Botoes from "./Botoes";
import PassoForm from "./PassoForm";

class Contador extends Component {
    //criado objeto interno para controlar as informações do componente
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial ||  1,
    }

    setInc = () => {
        this.setState({
            //não é necessário atualizar ou referenciar todos os atributos do state
            numero: this.state.numero + this.state.passo
        })
    }

    setDec = () => {
        this.setState({
            //não é necessário atualizar ou referenciar todos os atributos do state
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        })
    }

    render() {
        return (
            <div className={"Contador"}>
                <h2>Contador</h2>
                <Display numero={this.state.numero}></Display>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}></PassoForm>
                <Botoes onInc={this.setInc} onDec={this.setDec}></Botoes>
            </div>
        );
    }
}

export default Contador