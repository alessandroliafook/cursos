var filtro = document.querySelector('#filtrar-tabela');

filtro.oninput = function() {

    var pacientes = document.querySelectorAll('.paciente');

    
    if(this.value.length > 0) {
        
        var expressao = new RegExp(this.value, 'i');

        pacientes.forEach(paciente => {
            
            var tdNome = paciente.querySelector('.info-nome');
            var nomePaciente = tdNome.textContent;
    
            if(!expressao.test(nomePaciente))
                paciente.classList.add('invisivel');
            
            else
                paciente.classList.remove('invisivel');
            });
     
        } else {
            pacientes.forEach(paciente => {
                paciente.classList.remove('invisivel');
        });
    }
};