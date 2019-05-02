var urlFrase = http + '/frase'

$('#botao-frase').click(getFrase);
$('#botao-frase-id').click(buscaFrase);

function getFrase() {

    toggleSpinner();

    $.get(urlFrase, trocaFraseAleatoria)
    .fail(exibeErro)
    .always(toggleSpinner);
}

function trocaFraseAleatoria(data) {

    var numeroAleatorio = Math.random() * data.length;
    var pos = Math.floor(numeroAleatorio);
    
    trocaFrase(data[pos]);
}

function buscaFrase() {

    toggleSpinner();

    var fraseId = $('#frase-id').val();
    var dados = { id: fraseId };

    $.get(urlFrase, dados, trocaFrase)
    .fail(exibeErro)
    .always(toggleSpinner);
}

function trocaFrase(frase) {

    console.log(frase);
    
    $('.frase').text(frase.texto);
    
    atualizaTamanhoFrase();
    atualizaTempoInicial(frase.tempo);
}

function contarPalavras(frase) {

    return frase.split(/\S+/).length -1;
}