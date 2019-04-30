var tabela = document.querySelector('#tabela-pacientes');

tabela.ondblclick = function (event) {

    var alvo = event.target;
    var pai = alvo.parentNode;

    pai.classList.add('fadeout');
    
    setTimeout(function() {
        pai.remove();
    }, 500);
}
