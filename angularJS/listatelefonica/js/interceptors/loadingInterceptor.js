angular
    .module("listaTelefonica")
    .factory("loadingInterceptor", function ($q, $rootScope, $timeout){
        // necessário configurar os 4 estados possíveis de uma requisição
        return {
            request: function (config) {
                // configurando o escopo geral uma variável para controle
                // de exibição da imagem de loading
                $rootScope.loading = true
                return config
            },
            // configurar nos demais estados o fim da exibição
            requestError: function (rejection) {
                $rootScope.loading = false
                return $q.reject(rejection)          
            },
            response: function (response) {
                $timeout(function () {
                    $rootScope.loading = false
                }, 500)
                return response
            },
            responseError: function (rejection) {
                $rootScope.loading = false
                return $q.reject(rejection)
            }
        }
})