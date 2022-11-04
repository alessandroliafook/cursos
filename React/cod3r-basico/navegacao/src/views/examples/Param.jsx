import {useParams} from "react-router-dom";

const Param = props => {
    // recupera o parâmetros como objeto vinculando os atributos ao nome do parametro
    // definido na url
    const {id} = useParams()
    return (
        <div className={"Param"}>
            <h1>Param</h1>
            <h2>Valor: {id}!</h2>
        </div>
    )
}

export default Param