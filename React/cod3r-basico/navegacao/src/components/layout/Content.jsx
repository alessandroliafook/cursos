import "./Content.css"
import React from "react";
import {Route, Routes} from "react-router-dom";
import About from "../../views/examples/About";
import Home from "../../views/examples/Home";
import Param from "../../views/examples/Param";
import NotFound from "../../views/examples/NotFound";

const Content = props => {
    return (
        <div className={"Content"}>
            <Routes>
                {/*ao definir uma rota com o : antes de um nome, é um parâmetro*/}
                <Route path={"/param/:id"} exact element={<Param/>} />
                <Route path={"/about"} element={<About/>} />
                {/*Deixar a rota home no final, sem o atributo exact faz com que ela seja
                exibida, caso nenhuma das opções anteriores seja correspondente a url recebida*/}
                <Route path={"/"} exact element={<Home/>} />
                {/*Ao colocar o * no path e posicionar ao final das rotas, indica que ele vai ser
                redirecionado, caso nenhuma das opções anteriores atenda a url recebida*/}
                <Route path={"*"} exact element={<NotFound/>} />
            </Routes>
        </div>
    )
}

export default Content