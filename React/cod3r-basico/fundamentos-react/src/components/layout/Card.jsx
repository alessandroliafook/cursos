import "./Card.css"

export default props => {

    const cardStyle = {
        // como o js não aceita hifem no nome da variável, então utiliza o camel case
        backgroundColor: props.color || "#F00",
        borderColor: props.color || "#F00"
    }

    //é possível criar um objeto literal dentro do style
    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}