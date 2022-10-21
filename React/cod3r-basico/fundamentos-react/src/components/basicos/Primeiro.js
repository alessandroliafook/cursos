// Necessário importar o React para utilizar jsx
// importante utilizar o nome correto
import React from "react";

// é possível exporta a função como anônima, caso ela seja default
// Esse é um componente funcional, pois é baseado em uma função
export default function Primeiro() {
    const msg = 'Seja bem vindo(a)!'
    return <div>
        <h2>Primeiro Componente</h2>
        <p>{msg}</p>
    </div>
}