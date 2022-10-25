import {useState} from "react";
import "./Input.css"

//Em react os componentes de input, select e textarea são controlados,
//dessa forma, o que vale é o estado interno, ou seja,
// só é possível realizar modificação do conteúdo através da mudança do
// estado interno, sendo um fluxo exclusivamente unidirecional
export default props => {
    // função setValor utilizada para controlar o estado interno
    //variável valor represente o conteúdo armazenado
    const [valor, setValor] = useState('Inicial')

    //função criada para receber um evento, e a partir dele
    // realizar a modificação do estado interno do componente
    function quandoMudar(e) {
        setValor(e.target.value)
    }

    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                {/*necessário capturar o evento de modificação e atrelar o mesmo a função que
            trate o evento e modifique o valor*/}
                <input value={valor} onChange={quandoMudar}/>
                {/*Caso não seja interessante realizar o tratamento da mudança do conteúdo,
            então é uma boa prática informar isso através da propriedade readOnly*/}
                <input value={valor} readOnly/>
                {/*É possível definir um componente não controlado*/}
                <input value={undefined}/>
            </div>
        </div>
    )
}