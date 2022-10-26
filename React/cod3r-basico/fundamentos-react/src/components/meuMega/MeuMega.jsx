import {useState} from "react";
import BotaoSorteio from "./MeuBotaoSorteio";
import DisplayAposta from "./MeuDisplayAposta";
import TamanhoSorteioForm from "./MeuTamanhoForm";

import "./MeuMega.css"

export default props => {
    const [aposta, setAposta] = useState([])
    const [tamanhoSorteio, setTamanhoSorteio] = useState(6)

    const gerarAposta = () => {
        const apostaGerada = []

        while(apostaGerada.length < tamanhoSorteio) {
            let valorGerado = parseInt(Math.random() * 60) + 1

            if (!apostaGerada.includes(valorGerado)) {
                apostaGerada.push(valorGerado)
            }
        }
        setAposta(apostaGerada.sort((a, b) => a-b))
    }

    return (
        <div className={"MeuMega"}>
            <DisplayAposta apostaSorteada={aposta.join(' ')}/>
            <TamanhoSorteioForm tamanho={tamanhoSorteio} setTamanho={setTamanhoSorteio}/>
            <BotaoSorteio sortearNumeros={gerarAposta}/>
        </div>
    )
}