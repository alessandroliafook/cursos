angular.module("listaTelefonica").config(function($routeProvider){

    $routeProvider
        .when("/contatos", {
            templateUrl: "view/contatos.html",
            controller: "contatosCtrl",
            resolve: {
                contatos: function(contatosAPI) {
                    return contatosAPI.getContatos()
                }
            }
        })
        .when("/novoContato", {
            templateUrl: "view/novoContato.html",
            controller: "novoContatoCtrl",
            resolve: {
                operadoras: function(operadorasAPI) {
                    return operadorasAPI.getOperadoras()
                }
            }
        })
        .when("/detalhesContato/:id", {
            templateUrl: "view/detalhesContato.html",
            controller: "detalhesContatoCtrl",
            resolve: {
                contato: function(contatosAPI, $route) {
                    return contatosAPI.getContato($route.current.params.id)
                }
            }
        })

    // não aceita encadeamento de funções
    $routeProvider.otherwise({ redirectTo: "/contatos"})
})