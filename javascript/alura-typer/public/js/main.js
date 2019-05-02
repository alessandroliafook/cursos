var tempoInicial = $('#tempo-digitacao').text();

var campo = $('.campo-digitacao');

$(document).ready(function() {

    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $('#botao-reiniciar').click(reiniciarJogo);
    getPlacar();
    $('#usuarios').selectize({
        create: true,
        sortField: 'text'
    });
    $('.tooltip').tooltipster({
            trigger: 'custom'
        });
});

function atualizaTempoInicial(tempo) {
    
    tempoInicial = tempo;
    $('#tempo-digitacao').text(tempo);
}

function atualizaTamanhoFrase() {

    var frase = $('.frase').text();
    var numPalavras = contarPalavras(frase);
    
    var tamanhoFrase = $('#tamanho-frase')
    tamanhoFrase.text(numPalavras);    
}

function inicializaContadores() {

    campo.on('input', function() {
        
        var conteudo = campo.val();
    
        var qntPalavras = contarPalavras(conteudo);
        $('#contador-palavras').text(qntPalavras);
    
        var qntCaracteres = conteudo.length;
        $('#contador-caracteres').text(qntCaracteres);
    });
}

function inicializaCronometro() {

    campo.one('focus', function() {

        var tempoRestante = $('#tempo-digitacao').text();

        $('#botao-reiniciar').attr('disabled', true);

        var cronometroId = setInterval(function() {
        
            tempoRestante--;
            $('#tempo-digitacao').text(tempoRestante);
            
            if(tempoRestante < 1) {
                
                clearInterval(cronometroId);
                finalizaJogo();
            }
        }, 1000);
    });
}

function finalizaJogo() {
    
    campo.attr('disabled', true);
    $('#botao-reiniciar').attr('disabled', false);
    campo.toggleClass('campo-desativado');
    inserePlacar();
}

function inicializaMarcadores() {

    campo.on('input', function() {
        
        var frase = $('.frase').text();
        var digitado = campo.val();
        var digitouCorreto = frase.startsWith(digitado);        

        if(digitouCorreto) {
            
            campo.removeClass('borda-vermelha');
            campo.addClass('borda-verde');
            
        } else {
            
            campo.removeClass('borda-verde');
            campo.addClass('borda-vermelha');
        }
    });
}

function reiniciarJogo() {
    
    campo.attr('disabled', false);
    campo.val('');
    campo.toggleClass('campo-desativado');
    campo.removeClass('borda-vermelha');
    campo.removeClass('borda-verde');
    $('#contador-palavras').text('0');
    $('#contador-caracteres').text('0');
    $('#tempo-digitacao').text(tempoInicial);
    inicializaCronometro();
}

function contarPalavras(frase) {

    return frase.split(/\S+/).length -1;
}