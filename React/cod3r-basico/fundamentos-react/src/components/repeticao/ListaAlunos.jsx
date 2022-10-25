import alunos from "../../data/alunos";

export default props => {
    //forma de criar com força bruta
    // const li = (
    //     <li>
    //         {alunos[0].id}) {alunos[0].nome} -> {alunos[0].nota}
    //     </li>
    // )

    const lis = alunos.map(aluno => {
        //Sempre bom inserir uma propriedade chave no caso para facilitar o React
        // a possibilidade de detectar mudanças no componente
        return (<li key={aluno.id}>
            {aluno.id}) {aluno.nome} -> {aluno.nota}
        </li>)
    })

    return (
        <div>
            {/*adicionando conf para retirar os bullets da visualização*/}
            <ul style={{listStyle: "none"}}>
                {/*listando de forma dinamica*/}
                {lis}

                {/*listando individualmente*/}
                {/*{li}*/}

                {/*Listando de forma estática*/}
                {/*<li>Ana - 9.7</li>*/}
                {/*<li>Carlos - 7.7</li>*/}
                {/*<li>Daniel - 6.5</li>*/}
            </ul>
        </div>
    )
}