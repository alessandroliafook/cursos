angular
    .module("listaTelefonica")
    .controller("contatosCtrl", function ($scope, serialGenerator, contatos) {
        $scope.contatos = contatos.data

        const generateSerial = function(contatos) {
            contatos.forEach(contato => {
                if(!contato.serial)
                    contato.serial = serialGenerator.generate()
            })
        }

        $scope.apagarContatos = function (contatos) {
            $scope.contatos = contatos.filter(function (contato) {
                if (!contato.selecionado) return contato
            });
        }

        $scope.isContatoSelecionado = function (contatos) {
            return contatos.some(function (contato) {
                return contato.selecionado
            })
        }

        $scope.ordenarPor = function (campo) {
            $scope.criterioDeOrdenacao = campo
            $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao
        }

        generateSerial($scope.contatos)
    })