const express = require('express')
const app = express();
const BodyParer = require('body-parser')

const handlebars = require('express-handlebars')

const Sequelize = require('sequelize')


// Config

    // configurando o handlebars  como Template Engine do projeto // configuring handlebars as the project's Template Engine //

    // Template.Engine
       app.engine('handlebars',handlebars({defaultLayout: 'main'}))
       app.set('view engine', 'handlebars')

       //Body-Parser

       app.use(BodyParer.urlencoded({extended: false}))
       app.use(BodyParer.json())
    // conexao com banco de dados // connect whit database

        const sequelize = new Sequelize('siscad','root','',{

            host: 'localhost',
            port: '3038',
            dialect: 'mysql' 
        })


        // rotas // routes //

        app.get('/registration/postagem', (req, res) => {

            res.render('form')
        })

        app.post('/add', (req,res) => {

            res.send('Titulo: '+req.body.title+', Conteudo: '+ req.body.conteudo)

            
        })



app.listen(8081, () =>{

    console.log("Servidor esta rodando na url http://localhost:8081")
})