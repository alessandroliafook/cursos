angular
    .module("listaTelefonica")
    // Para utilizar filtros no controller deve-se adicionar as injeções respectivas
    // o HTTP não é mais necessários pois ele passa a ser importardo nos services
    // Os filtros não são mais colocados, pois passou a ser utilizado o servidor
    .controller("listaTelefonicaCtrl", function ($scope, /*$filter, uppercaseFilter, $http,*/ contatosAPI, operadorasAPI, serialGenerator) {
        $scope.app = "Lista Telefônica";
        // $scope.contatos = [
        //     // existem duas formas de invocar os filtros
        //     { nome: $filter('uppercase')("Pedro"), telefone: "99998888", cor: "blue", data: new Date(), operadora: { nome: "Oi", codigo: 14, categoria: "Celular" }},
        //     { nome: uppercaseFilter("Ana"), telefone: "99998877", cor: "yellow", data: new Date(), operadora: { nome: "Vivo", codigo: 15, categoria: "Celular" } },
        //     { nome: "Maria", telefone: "99998866", cor: "red", data: new Date(), operadora: { nome: "Tim", codigo: 41, categoria: "Celular" } }
        // ];
        $scope.contatos = []
        // $scope.operadoras = [
        //     { nome: "Oi", codigo: 14, categoria: "Celular", preco: 2 },
        //     { nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1 },
        //     { nome: "Tim", codigo: 41, categoria: "Celular", preco: 3 },
        //     { nome: "GVT", codigo: 25, categoria: "Fixo", preco: 2 },
        //     { nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 4 }
        // ]
        $scope.operadoras = []

        var carregarContatos = function () {
            contatosAPI.getContatos().success(function (data, status) {
                data.forEach(contato => {
                    if(!contato.serial) contato.serial = serialGenerator.generate()
                })
                $scope.contatos = data

            }).error(function (data, status) {
                $scope.error = `Aconteceu um problema (Status ${status}): ${data}`
            })
        }

        // a variável status é opcional
        var carregarOperadoras = function () {
            operadorasAPI.getOperadoras().success(function (data) {
                $scope.operadoras = data
            })
        }

        $scope.adicionarContato = function (contato) {

            contato.serial = serialGenerator.generate()
            // forma de adicionar o contato quando a página armazena as informações
            // em memória.
            // $scope.contatos.push(angular.copy(contato));

            // Forma de adicionar contato quando a página realiza comunicação com o
            //  servidor
            contatosAPI.saveContato(contato).success(
                function (data) {
                    delete $scope.contato // limpar campos do form
                    $scope.contatoForm.$setPristine() // retorna o form ao status de intocado
                    // Pode chamar a função de recarregar todos os contatos
                    carregarContatos()
                }
            ).error(function (data, status) {
                console.log(data.message)
            });
        }
        $scope.apagarContatos = function (contatos) {
            $scope.contatos = contatos.filter(function (contato) {
                if (!contato.selecionado) return contato
            });
        }
        $scope.isContatoSelecionado = function (contatos) {
            // função que retorna true se uma das avaliações for true
            return contatos.some(function (contato) {
                return contato.selecionado
            })
        }
        $scope.ordenarPor = function (campo) {
            $scope.criterioDeOrdenacao = campo
            $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao
        }
        carregarContatos()
        carregarOperadoras()
    })