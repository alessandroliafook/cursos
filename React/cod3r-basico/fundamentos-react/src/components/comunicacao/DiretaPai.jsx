import DiretaFilho from "./DiretaFilho";

export default props => {
    return (
        <div>
            {/*Utilizando comunicação direta, passando as propriedades como parametro*/}
            {/*Exemplo mais complexo foi realizado no componente de família*/}
            <DiretaFilho nome="Junior" idade={20} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Gabriel" idade={17} nerd={true}></DiretaFilho>
        </div>
    )
}