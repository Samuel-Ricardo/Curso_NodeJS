const Sequelize = require('sequelize')


    // conexao com banco de dados // connect whit database

    const sequelize = new Sequelize('siscad','root','',{

        host: 'localhost',
        port: '3038',
        dialect: 'mysql' 
    })


    // verify connection
        sequelize.authenticate().then(function(){

            console.log("Conectado com sucesso")

        }).catch((error) => {
            
            console.log('Erro ao Conectar: '+ error)

        })

    module.exports = {

        Sequelize: Sequelize,
        sequelize: sequelize
    }