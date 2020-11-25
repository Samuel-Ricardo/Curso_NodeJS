const express = require("express")

// var express = funçao construtora do express // var express = construct function of express //

const app = express();

// var app = uma nova instancia do express gerada a partir da funçao construtora // var app = uma nova instancia do express gerada a partir da funçao construtora //

app.listen(8081, function(){

    console.log("Servidor ronadndo na url localhost: 8081")
})

//app.listem(porta)

// função que inicia o servidor abstraindo o código usando em /Protocolo_HTTP/Protocol.js // function that starts the server by abstracting the code using at /Protocolo_HTTP/Protocol.js //

// Deve ser a ultima linha de código // Must be the last line of code //

