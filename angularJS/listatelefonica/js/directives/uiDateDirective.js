angular.module("listaTelefonica").directive("uiDate", function (dateFilter) {
    return {
        require: "ngModel",
        // os atributos do require são acessados no ctrl
        link: function (scope, element, attrs, ctrl) {
            // funcão que aplica a máscara a uma data retornando no formato dd/mm/aaaa
            // e limitando seus caracteres e tamanho de string
            const _formatDate = function (date) {
                date = date.replace(/[^0-9]+/g, "")

                if(date.length > 2)
                    date = date.substring(0, 2) + "/" + date.substring(2)

                if(date.length > 5)
                    date = date.substring(0, 5) + "/" + date.substring(5, 9)

                return date
            }

            // forma de controlar o formulário aplicando uma máscara
            element.bind("keyup", function () {
                ctrl.$setViewValue(_formatDate(ctrl.$viewValue))
                ctrl.$render()
            })

            // cadastrando uma função que irá capturar o valor do elemento e realizar uma transformação
            // controlando o momento em que o valor digitado será inserido no scope
            ctrl.$parsers.push(function (value) {
                if(value.length === 10) {
                    const dateArray = value.split("/")
                    return new Date(dateArray[2], dateArray[1]-1, dateArray[0]).getTime()
                }
            })

            //cadastrando uma função que irá controlar o valor do elemento no escopo
            // e realizar uma transformação antes do valor ser exibido pela view
            ctrl.$formatters.push(function (value) {
                return dateFilter(value, "dd/MM/yyyy")
            })
        }
    }
})