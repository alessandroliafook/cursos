export default props => {
    const isPar = props.numero % 2 === 0
    return (
        <div>
            {/*renderização condicional direto no código js e com  operador ternário*/}
            {
                isPar ?
                    <span>Par</span> :
                    <span>Ímpar</span>
            }
        </div>
    )
}