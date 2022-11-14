import React, {useEffect, useState} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from "../../components/layout/SectionTitle";

function calcFactorial(n) {
    if(n < 0) return -1
    if(n === 0) return 1
    return n * calcFactorial(n - 1)
}

function isOdd(n) {
    return n%2 === 0
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [factorial, setFactorial] = useState(1)
    const [status, setStatus] = useState(false)

    //a função useEffect é utilizada para realizar um callback condicionado
    // a alteração do estado de um elemento do componente
    //Obs se chamar com o segundo parametro vazio, será calculado sempre
    useEffect(function () {
        const num = parseInt(number)

        setFactorial(calcFactorial(num))
        setStatus(isOdd(num))
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title={"Exercício #01"}/>
            <div className="center">
                <div>
                <span className="text">Fatorial: </span>
                    <span className="text red">{(factorial < 0) ? 'Não Existe' : factorial}</span>
                </div>
                <input type="number" className="input"
                       value={number} onChange={e => setNumber(e.target.value)}/>
            </div>

            <SectionTitle title={"Exercício #01"}/>
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{(status) ? 'Par' : 'Ímpar'}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
