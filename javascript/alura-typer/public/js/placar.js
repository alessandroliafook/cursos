function inserePlacar() {
    
    var corpoTabela = $('.placar').find('tbody');
    var usuario = 'Alessandro';
    var numPalavras = $('#contador-palavras').text();

    var linha = novaLinha(usuario, numPalavras);
    
    corpoTabela.prepend(linha);
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
    $(this)
        .parent()
        .parent()
        .remove();
}