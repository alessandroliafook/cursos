angular.module("uiAccordion", [])

angular.module("uiAccordion").run(function ($templateCache) {
        $templateCache.put("view/accordion.html",
            `<div class="ui-accordion-title" ng-bind="title" ng-click="open()"></div>
            <div class="ui-accordion-content" ng-show="isOpened" ng-transclude></div>`)
    }
)

angular.module("uiAccordion").directive("uiAccordions", function () {
    return {
        // função construtora
        controller: function ($scope, $element, $attrs) {
            const accordions = []

            // só é possível visualizar externamente o que estiver definido com o this
            this.registerAccordion = function (accordion) {
                accordions.push(accordion)
            }

            this.closeAll = function () {
                accordions.forEach(accordion => accordion.isOpened = false)
            }
        }
    }
})

angular.module("uiAccordion").directive("uiAccordion", function () {
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
                if (!scope.isOpened)
                    ctrl.closeAll()
                scope.isOpened = !scope.isOpened
            }
        }
    }
})