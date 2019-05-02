var urlPlacar = http + '/placar';

$('#botao-placar').click(mostraPlacar);
$('#botao-sync').click(sincronizaPlacar);

function mostraPlacar() {
    $('.placar').stop().slideToggle(600);
}

function inserePlacar() {
    
    var corpoTabela = $('.placar').find('tbody');
    var usuario = $('#usuarios').val();
    var numPalavras = $('#contador-palavras').text();

    var linha = novaLinha(usuario, numPalavras);
    
    corpoTabela.prepend(linha);
    scrollPlacar();
}

function scrollPlacar() {

    var placar = $('.placar');
    
    placar.slideDown(500);
    var posicaoPlacar = placar.offset().top;

    $('html, body').animate({
        scrollTop: posicaoPlacar+'px'
    }, 1000);
}

function novaLinha(usuario, numPalavras) {

    var linha = $('<tr>');

    var colunaUsuario = $('<td>').text(usuario);
    var colunaPalavras = $('<td>').text(numPalavras);
    var colunaRemover = criarColunaRemover();

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}

function criarColunaRemover() {

    var colunaRemover = $('<td>');

    var link = $('<a>')
                    .addClass('botao-remover')
                    .attr('href', '#');
    
    var icone = $('<i>')
                    .addClass('small')
                    .addClass('material-icons')
                    .text('delete');
    
    link.append(icone);
    link.click(removeLinha);
    colunaRemover.append(link);

    return colunaRemover;
}

function removeLinha(event) {

    event.preventDefault();
    var linha = $(this)
                    .parent()
                    .parent();
    
    linha.fadeOut(function() {
        linha.remove();
    });
}

function sincronizaPlacar() {

    var placar = [];

    var linhas = $('.placar').find('tbody>tr');
    linhas.each(function() {

        var usuario = $(this).find('td:nth-child(1)').text();
        var numPalavras = $(this).find('td:nth-child(2)').text();
        
        var score = {
            usuario: usuario,
            pontos: numPalavras
        };

        placar.push(score);
    });

    var dados = { placar: placar };

    $.post(urlPlacar, dados, function() {
        console.log('Placar salvo com sucesso!');
        $('.tooltip').tooltipster('open').tooltipster('content', 'Sucesso ao sincronizar!');
    })
    .fail(function() {
        
        $('.tooltip').tooltipster('open').tooltipster('content', 'Falha ao sincronizar!');
        })
    .always(function() {
        setTimeout(function () {     
            $('.tooltip').tooltipster('close');
        }, 1200);
    });
}


function getPlacar() {

    toggleSpinner();

    $.get(urlPlacar, atualizaPlacar)
    .fail(exibeErro)
    .always(toggleSpinner);
}

function atualizaPlacar(dados) {

    $(dados).each(function() {

        var linha = novaLinha(this.usuario, this.pontos);
        var corpoTabela = $('.placar').find('tbody');

        corpoTabela.append(linha);        
    });
}