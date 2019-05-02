var http = 'http://localhost:3000';

function exibeErro() {

    $('#erro').toggle();

    setTimeout(function() {
        $('#erro').toggle();
    },2000);
}

function toggleSpinner() {
    $('#spinner').toggle();
}