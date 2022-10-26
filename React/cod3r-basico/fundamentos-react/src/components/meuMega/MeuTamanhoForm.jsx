export default props => {
    return (
        <div>
            <label htmlFor={"tamanho"}>Tamanho: </label>
            <input
                id={"tamanho"}
                type={"number"}
                value={props.tamanho}
                onChange={e => props.setTamanho(+e.target.value)}
            />
        </div>
    )
}