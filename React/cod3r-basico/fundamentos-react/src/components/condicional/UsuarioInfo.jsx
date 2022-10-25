import If, {Else} from "./if";

export default props => {

    //testando existência do atributo para garantir a execução
    const usuario = props.usuario || {}
    return (
        <div>
            {/*Utilizando o componente com testes antagônicos para definir o if/else*/}
            {/*<If test={usuario && usuario.nome}>*/}
            {/*    Seja bem vindo <strong> {usuario.nome}</strong>!*/}
            {/*</If>*/}
            {/*<If test={!usuario || !usuario.nome}>*/}
            {/*    Seja bem vindo <strong> Amigão</strong>!*/}
            {/*</If>*/}

            <If test={usuario && usuario.nome}>
                Seja bem vindo <strong> {usuario.nome}</strong>!
                <Else>
                    Seja bem vindo <strong> Amigão</strong>!
                </Else>
            </If>
        </div>
    )
}