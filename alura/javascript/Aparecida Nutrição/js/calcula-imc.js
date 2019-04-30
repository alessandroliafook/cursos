let titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista'

var pacientes = document.querySelectorAll('.paciente');

pacientes.forEach(paciente => {
    atualizaImc(paciente);
});

function atualizaImc(paciente) {

    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector('.info-imc');
    
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    
    if(!alturaEhValida) {

        tdAltura.textContent ='Altura invalida!';
        paciente.classList.add("paciente-invalido");
    }
    
    if(!pesoEhValido) {

        tdPeso.textContent = 'Peso invalido!';
        paciente.classList.add("paciente-invalido");
    }
    
    if(pesoEhValido && alturaEhValida) {
        
        tdImc.textContent = calculaImc(peso, altura);
    }
    
    else {
        
        tdImc.textContent = 'Altura e/ou peso inválidos!';
        paciente.classList.add("paciente-invalido");
    }
}

function calculaImc(peso, altura) {

    var imc = peso / Math.pow(altura, 2);
    return imc.toFixed(2);
}

function validaPeso(peso) {

    return peso >= 0 && peso < 1000;
}

function validaAltura(altura) {
    return altura >= 0 && altura < 3.0;
}
