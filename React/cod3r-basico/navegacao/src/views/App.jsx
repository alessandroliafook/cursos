import React from "react";
import "./App.css"
import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";

import {BrowserRouter} from "react-router-dom";

const App = props => {
    return (
        <div className={"App"}>
            {/*<h1>Component App</h1>*/}
            {/*Tanto o menu quanto o conteúdo devem estar incluídos no elemento BrowserRouter*/}
            <BrowserRouter>
                <Menu/>
                <Content/>
            </BrowserRouter>
        </div>
    )
}

export default App