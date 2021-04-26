// pode chamar a funcção value ou constant
// a diferença é que serviço do tipo provider 
// aceita o constant e não aceita o value
// angular.module("listaTelefonica").value("config", {
angular.module("listaTelefonica").constant("config", {
    baseUrl: "http://localhost:3412"
})