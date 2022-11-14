import React, {useEffect, useRef, useState} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from "../../components/layout/SectionTitle";

function merge(val1, val2) {
    var i = 0
    var out = ""

    while (i < val1.length || i < val2.length) {
        if (i < val1.length) {
            out += (val1[i] || "")
        }

        if (i < val2.length) {
            out += (val2[i] || "")
        }

        i++
    }
    return out
}

const UseRef = (props) => {
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")

    const count = useRef(0)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    //atualizar o valor interno do objeto count não irá causar
    // uma nova renderização da pagina, logo ele pode ser atualizado
    // sem o auxílio de um hook

    // dessa forma ele irá controlar o valor de todas as renderizações
    // count.current++

    //dentro do useEffect ele irá controlar apenas quando um objeto
    // vinculado na lista sofrer alteração
    // useEffect(function () {
    //     count.current++
    // }, [value1, value2])

    useEffect(function () {
        count.current++
        myInput2.current.focus()
    }, [value1])

    useEffect(function () {
        count.current++
        myInput1.current.focus()
    }, [value2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title={"Exercício #01"}/>
            <div className="center">
                <div>
                    <span className="text">Valor: {merge(value1, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                {/*O react vincula a referência do input como o current do ref*/}
                <input type="text" className="input"
                       ref={myInput1}
                       value={value1} onChange={e => {
                    setValue1(e.target.value)
                }}/>
            </div>

            <SectionTitle title={"Exercício #02"}/>
            <div className="center">
                <input type="text" className="input"
                       ref={myInput2}
                       value={value2} onChange={e => {
                    setValue2(e.target.value)
                }}/>
            </div>
        </div>
    )
}

export default UseRef
