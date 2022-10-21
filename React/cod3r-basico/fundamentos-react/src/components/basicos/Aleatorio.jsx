import React from "react";

export default props => {
    // padrão destructuring, ou seja, desconstruindo o objeto em variáveis
    // para fazer com objetos utiliza {} e para array utiliza [] ambos no lado esquerdo
    const {min, max} = props
    const val = Math.floor(Math.random() * (max - min + 1) + min);
    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p><strong>Valor mínimo:</strong> {min}</p>
            <p><strong>Valor máximo:</strong> {max}</p>
            <p><strong>Valor escolhido:</strong> {val}</p>
        </div>
    )
}
