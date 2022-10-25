/*

A intenção é criar uma funcionalidade capaz de realizar a renderização condicional dos filhos.
Ex:

    <If test={aluno.nota >= 7}>
        <span>...</span>
        <span>...</span>
        <span>...</span>
    </If>

*/

// definição padrão sem o uso do else
// export default props => {
//     if (props.test) {
//         return props.children
//     } else {
//         return false
//     }
// }

export default props => {
    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === 'Else'
    })

    const ifChild = props.children.filter(child => {
        return !elseChild.includes(child)
    })

    if (props.test) {
        return ifChild
    } else {
        return elseChild
    }
}

export const Else = props => props.children
