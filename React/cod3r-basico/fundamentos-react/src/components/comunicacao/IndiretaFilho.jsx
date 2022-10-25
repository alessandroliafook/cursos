export default props => {
    const cb = props.quandoClicar
    const [min, max] = [50, 70]

    const gerarIdade = () => parseInt(Math.random() * (max - min)) + min
    const gerarNerd = () => Math.random() > 0.5

    return (
        <div>
            <div>
                Filho
            </div>
            {/*Função de forma explícita*/}
            {/*<button onClick={*/}
            {/*    function (event) {*/}
            {/*        props.quandoClicar('João', 53, true)*/}
            {/*    }*/}
            {/*}>*/}
            {/*    Fornecer Informações*/}
            {/*</button>*/}
            <button onClick={_ => cb('João', gerarIdade(), gerarNerd())}>
                Fornecer Informações
            </button>
        </div>
    )
}