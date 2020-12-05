const express = require('express')
const app = express();
const BodyParer = require('body-parser')

const handlebars = require('express-handlebars')

const Post = require('./Model/Post')




// Config

    // configurando o handlebars  como Template Engine do projeto // configuring handlebars as the project's Template Engine //

    // Template.Engine
       app.engine('handlebars',handlebars({defaultLayout: 'main'}))
       app.set('view engine', 'handlebars')

       //Body-Parser

       app.use(BodyParer.urlencoded({extended: false}))
       app.use(BodyParer.json())


        // rotas // routes //

        app.get('/registration/postagem', (req, res) => {

            res.render('form')
        })

        app.get('/home', (req,res) => {

            Post.findAll().then((posts) => {

                res.render('home',{posts: posts})
            })

//res.render('home')

        })

        app.post('/add', (req,res) => {

            Post.create({

                title: req.body.title,
                conteudo: req.body.conteudo
            }).then(() => {

                res.redirect('/home')
            }).catch((error) => {

                res.send('Error: ' + error)
            })
        })



app.listen(8081, () =>{

    console.log("Servidor esta rodando na url http://localhost:8081")
})