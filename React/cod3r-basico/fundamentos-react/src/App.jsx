import "./App.css"
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import React from "react";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import MeuMega from "./components/meuMega/MeuMega";
import Mega from "./components/mega/Mega";

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

            <Card titulo="#13 - Minha Megasena" color="#89006E">
                <Mega qtde={8}></Mega>
            </Card>

            <Card titulo="#13.1 - Minha Megasena" color="#E69D20">
                <MeuMega></MeuMega>
            </Card>

            <Card titulo="#12 - Contador" color="#424242">
                <Contador numeroInicial={10}></Contador>
            </Card>

            <Card titulo="#11 - Componente Controlado (Input)" color="#E45F56">
                <Input></Input>
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#59323C">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 - Renderização Condicional" color="#982395">
                <ParOuImpar numero={20}></ParOuImpar>
                <UsuarioInfo usuario={{nome: "Fernando"}}></UsuarioInfo>
                <UsuarioInfo usuario={{email: "fer@nando.com"}}></UsuarioInfo>
                <UsuarioInfo/>
            </Card>

            <Card titulo="#07 - Desafio Repetição" color="#3A9AD9">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 - Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro"></FamiliaMembro>
                    <FamiliaMembro nome="Ana"></FamiliaMembro>
                    <FamiliaMembro nome="Carlos"></FamiliaMembro>
                </Familia>
            </Card>

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
