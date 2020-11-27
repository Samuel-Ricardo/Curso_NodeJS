const express = require('express')
const app = express();

const handlebars = require('express-handlebars')

const Sequelize = require('sequelize')


// Config

    // configurando o handlebars  como Template Engine do projeto // configuring handlebars as the project's Template Engine //

    // Template.Engine
       app.engine('handlebars',handlebars({defaultLayout: 'main'}))
       app.set('view engine', 'handlebars')

    // conexao com banco de dados // connect whit database

        const sequelize = new Sequelize('siscad','root','',{

            host: 'localhost',
            port: '3038',
            dialect: 'mysql' 
        })


        // rotas // routes //

        app.get('/registration/postagem', (req, res) => {

            res.render('form.handlebars')
        })

app.listen(8081, () =>{

    console.log("Servidor esta rodando na url http://localhost:8081")
})