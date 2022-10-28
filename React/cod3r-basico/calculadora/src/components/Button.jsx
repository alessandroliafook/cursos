import "./Button.css"

export default props => {
    //construindo as classes css do componente de acordo com
    // as propriedades passadas
    const classes = `
            button
            ${props.operation ? 'operation' : ''}
            ${props.double ? 'double' : ''}
            ${props.triple ? 'triple' : ''}
        `

    //função onClick que irá retornar o conteúdo do botão a cada click
    //repassando como parâmetro o conteúdo html do botão

    //O teste realizado antes da chamada da função existe para assegurar a existência
    // da função antes de sua chamada, evitando erro
    return (
        <button
            onClick={e => props.click && props.click(props.label)}
            className={classes}>
            {props.label}
        </button>
    )
}