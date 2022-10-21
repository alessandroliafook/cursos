//deveria ser necessário importar o react, mas funcionou... kkk
// import React from "react";

//utilizar a extensão jsx apenas serve para a IDE
export default function (props) {
    //não é possível modificar o valor das propriedades passadas no parametro
    // porém é possível realizar processamento, desde que não altere o objeto
    // passado no parâmetro
    const status = props.nota >= 7 ? 'Aprovado' : 'Em Recuperação';
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p><strong>{props.aluno} </strong>
                tem nota
                <strong> {props.nota} </strong>
                e está
                <strong> {status}</strong>.</p>
        </div>
    )
}