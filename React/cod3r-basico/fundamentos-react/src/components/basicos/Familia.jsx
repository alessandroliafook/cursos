//importando a função para não precisar ficar referenciando a biblioteca a cada uso
import React, {cloneElement} from "react";
// import FamiliaMembro from "./FamiliaMembro";

//Construção do elemento pai, passando as informações do filho nele
// export default props => {
//     return (
//         <div>
//             {/*pode passar o valor por atribuição*/}
//             <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome}/>
//             {/*Pode passar por desconstruçãoa, porém vai tudo*/}
//             <FamiliaMembro nome="Ana" {...props}/>
//             {/*pode atribuir diretamente*/}
//             <FamiliaMembro nome="Gustavo" sobrenome="Silva"/>
//         </div>
//     )
// }

//Construção do elemento pai, recebendo as informações na sua definição
export default props => {
    return (
        <div>
            {/*Trabalhando com múltiplos filhos*/}
            {
                props.children.map((child, i) => {
                return cloneElement(child, {...props, key: i})
            })
            }
            {/*Trabalhando com múltiplos filhos e com a biblioteca React*/}
            {/*{React.Children.map(props.children, child => cloneElement(child, props))}*/}
            {/*Repassando com as propriedades, que pode ser passadas invidualmente, por spread, ou todas*/}
            {/*{cloneElement(props.children, props)}*/}
            {/*Repassando com o import simples*/}
            {/*{React.cloneElement(props.children)}*/}
            {/*Repassa os elementos filhos, sem considerar as props do pai*/}
            {/*{props.children()}*/}
        </div>
    )
}