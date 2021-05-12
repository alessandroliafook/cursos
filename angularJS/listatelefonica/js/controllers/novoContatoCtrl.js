angular
    .module("listaTelefonica")
    .controller("novoContatoCtrl", function ($scope, contatosAPI, serialGenerator, $location, operadoras) {
        $scope.operadoras = operadoras.data
        $scope.adicionarContato = function (contato) {

            contato.serial = serialGenerator.generate()
            contatosAPI.saveContato(contato).success(
                function (data) {
                    $location.path("/contatos")
                }
            ).error(function (data, status) {
                console.log(data.message)
            })
        }
    })