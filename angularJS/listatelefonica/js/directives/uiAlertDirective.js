angular.module("listaTelefonica").directive("uiAlert", function () {
    return {
        templateUrl: "view/alert.html",
        replace: true, // o replace irá remover o elemento original
        // restringe o uso da diretiva e e conter mais de uma referencia
        // quando a diretiva for um elemento utilizar a string E
        // quando a diretiva for um atributo usar a string A
        // quando a diretiva for uma classe usar a string C
        // quando adireto for um comentario usar a string M
        restrict: "E",
        // A diretiva utiliza o escopo de onde se encontra por padrão
        // porém é possível definir um escopo separa para a diretiva, utilizando
        // o atributo:
        scope: {
            // utilizar o @ para realizar o vinculo gera uma conexão entre
            // a variável e o valor associado
            // forma basica de fazer a passagem de diretiva
            // topic: "@title",
            // caso os dois tenham o mesmo nome, pode fazer de outra forma
            title: "@",
            // error: "@message"
            // utilizar o = gera uma conexão entre as duas variáveis de escopo
            // ou seja, qualquer modificarção que uma sofra, vai refletir na outra
            // error: "=message"
            // mesma regra do anterior, se os nomes forem iguais, pode apenas
            // referenciar o simbolo
            message: "="
        },
        // para encapsular o conteúdo do html existe a propriedade tansclude
        transclude: true
    }
})