angular.module("listaTelefonica").directive("uiAccordions", function () {
  return {
      // função construtora
      controller: function ($scope, $element, $attrs) {
          const accordions = []

          // só é possível visualizar externamente o que estiver definido com o this
          this.registerAccordion = function (accordion) {
              accordions.push(accordion)
          }

          this.closeAll = function (){
              accordions.forEach(accordion => accordion.isOpened = false)
          }
      }
  }
})

angular.module("listaTelefonica").directive("uiAccordion", function () {
    return {
        templateUrl: "view/accordion.html",
        scope: {
            title: "@"
        },
        transclude: true,
        // usar o símbolo ^ permite acessar o componente do elemento pai
        require: "^uiAccordions",
        link: function (scope, element, attrs, ctrl) {
            ctrl.registerAccordion(scope)
            scope.open = function () {
                ctrl.closeAll()
                scope.isOpened = !scope.isOpened
            }
        }
    }
})