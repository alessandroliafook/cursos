import React from "react";

// Não é possível retornar dois elementos em conjunto sem envolver em uma tag para evitar um `parsing error`
//no caso utilizamos uma div, se não quiser utilizar a div, pode trocar a tag para o React.Fragment
// ou simplesmente deixar a tag vazia, a diferença é que no segundo caso, não pode haver propridades
export default function Fragmento(props) {
    return (
        <>
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro!</p>
        </>
    )
}