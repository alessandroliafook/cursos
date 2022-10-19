// importanto um arquivo que faz parte da aplicação
import './index.css'

import ReactDom from "react-dom";
// para o funcionamento do jsx que é a codificação de html em arquivo js
// funcionar é necessário que o react esteja importado
import React from "react";

// configuração utilizando js puro
// ReactDom.render(
//     'Olá React!!!',
//     document.getElementById('root')
// )

// configuração com jsx que é a capacidade do react de trabalhar uma linguagem que parece
// código html dentro de um arquivo js
const tag = <strong>Olá React!</strong>

// no caso de uma variável tem que referenciar ela dentro das chaves
ReactDom.render(
    <div>
        { tag }
    </div>,
    document.getElementById('root')
);