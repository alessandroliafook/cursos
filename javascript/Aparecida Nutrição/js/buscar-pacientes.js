var importar = document.querySelector('#importar-pacientes');

importar.onclick = function() {
    
    console.log('Importando os pacientes...');

    var xhr = new XMLHttpRequest();

    xhr.open('get', 'http://api-pacientes.herokuapp.com/pacientes1');

    xhr.onload = function() {

        if(this.status == 200) {

            var resposta = this.responseText;
            var pacientes = JSON.parse(resposta);
            
            pacientes.forEach(paciente => {
                adicionaPaciente(paciente);
            });
        } else {
            alert('Erro ' + this.status + '(' + this.statusText + ') ao buscar os pacientes.');
            console.log(this.status);
            console.log(this.statusText);
        }
    }

    xhr.send();
}