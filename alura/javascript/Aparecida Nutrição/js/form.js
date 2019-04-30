var addPaciente = document.querySelector('#adicionar-paciente');

addPaciente.onclick = function (event) {
    
    event.preventDefault();

    var form = document.querySelector('#form-adiciona');

    var paciente = obterPaciente(form);

    adicionaPaciente(paciente);
    
    form.reset();
};

function adicionaPaciente(paciente) {
    
    var mensagensErro = document.querySelector('.mensagens-erro');
    mensagensErro.innerHTML = '';

    var erros = validaPaciente(paciente);

    if(erros.length > 0) {

        exibirMensagensErro(erros);

    } else {
    
        var pacienteTr = createTr(paciente);
        
        var pacientesTable = document.querySelector('#tabela-pacientes');
        pacientesTable.appendChild(pacienteTr);
    }
}

function obterPaciente(form) {

    var pesoForm = form.peso.value; 
    var alturaForm = form.altura.value; 

    var paciente = {
        nome: form.nome.value,
        peso: pesoForm,
        altura: alturaForm,
        gordura: form.gordura.value,
        imc: calculaImc(pesoForm, alturaForm)            
    };

    return paciente;
}

function createTr(paciente) {

    var tr = document.createElement('tr');    
    tr.classList.add('paciente');

    for (var atributo in paciente) {

        var td = createTd(atributo, paciente);
        tr.appendChild(td);            
    }
    
    return tr;
}

function createTd(atributo, paciente) {

    var td = document.createElement('td');

    td.classList.add('info-' + atributo);
    td.textContent = paciente[atributo];

    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    for (var atributo in paciente) {
        if(paciente[atributo].length == 0) {
            
            var mensagemErro = 'O ' + atributo + ' não pode ser vazio!';
            erros.push(mensagemErro);
        }
    }

    if (!validaAltura(paciente.altura))
        erros.push('Altura inválida!');
    
    if (!validaPeso(paciente.peso))
        erros.push('Peso inválido!');
    
    return erros;
}

function exibirMensagensErro(erros) {

    var ul = document.querySelector('.mensagens-erro');

    erros.forEach(erro => {
        var li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });
}