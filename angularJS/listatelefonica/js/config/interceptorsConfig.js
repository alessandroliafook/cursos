// Necessário adicionar o interceptor na lista do Provider
angular.module("listaTelefonica").config(function($httpProvider){
    $httpProvider.interceptors.push("timestampInterceptor")
    $httpProvider.interceptors.push("errorInterceptor")
    $httpProvider.interceptors.push("loadingInterceptor")
})