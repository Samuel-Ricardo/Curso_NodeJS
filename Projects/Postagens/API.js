const express = require('express')
const app = express();

const handlebars = require('express-handlebars')

//  Config
    //  Template.Engine
       app.engine('handlebars',handlebars(defaultLayout: 'main'))
       app.set('view engine', 'handlebars')

// configurando o handlebars  como Template Engine do projeto // configuring handlebars as the project's Template Engine //

app.listen(8081, () =>{

    console.log("Servidor esta rodando na url http://localhost:8081")
})