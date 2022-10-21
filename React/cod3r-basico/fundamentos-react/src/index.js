// importanto um arquivo que faz parte da aplicação
import './index.css'

import ReactDom from "react-dom";
// para o funcionamento do jsx que é a codificação de html em arquivo js
// funcionar é necessário que o react esteja importado
import React from "react";
//O nome não precisa ser o mesmo nome da função caso o export utilize o default
// podendo inclusive a definição ser anônima
// import Primeiro from "./components/basicos/Primeiro";
// import ComParametro from "./components/basicos/ComParametro";
// import Fragmento from "./components/basicos/Fragmento";
import App from './App';


// configuração utilizando js puro
// ReactDom.render(
//     'Olá React!!!',
//     document.getElementById('root')
// )

// configuração com jsx que é a capacidade do react de trabalhar uma linguagem que parece
// código html dentro de um arquivo js
// const tag = <strong>Olá React!</strong>

// no caso de uma variável tem que referenciar ela dentro das chaves
ReactDom.render(
    <App/>
    , document.getElementById('root'));