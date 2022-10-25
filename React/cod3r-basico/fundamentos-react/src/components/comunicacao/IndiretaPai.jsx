import React, {useState} from "react";
import IndiretaFilho from "./IndiretaFilho";

export default props =>  {
    //A partir da função useState e o padrão de desconstrutor para ter a função
    // responsável por atualizar o estado do componente
    const [nome, setNome ]= useState('?')
    let [idade, setIdade] = useState(0)
    let [nerd, setNerd] = useState(false)


    //criar uma função para transmitir as informações
    //nome idade nerd
    function fornecerInformacoes(nomeParam, idadeParam, nerdParam) {
        setNome(nomeParam)
        setIdade(idadeParam)
        setNerd(nerdParam)
    }

    return (
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade} </strong></span>
                <span>{nerd ? "Verdadeiro" : "Falso"}!</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}