import "./App.css"
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import React from "react";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";

// É necessário retornar o default para que a função possa ser anônima nem arrow
// possível definir a arrow de várias formas
// (props) =>{return (<div></div>)} - padrão
// props =>{return (<div></div>)} - caso tenha apenas um parametro
// _ => {return (<div></div>)} - caso não utilize o parametro
// _ => <div></div> - caso o retorno seja todo o corpo da função
export default _ =>
    <div id="app">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio min={1} max={60}/>
            </Card>

            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento/>
            </Card>

            <Card titulo="#02 - Fragmento" color="#E8B71A">
                <ComParametro
                    titulo="Situação Aluno"
                    aluno="Pedro Silva"
                    nota={9.3}/>
            </Card>

            <Card titulo="#01 - Fragmento" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
