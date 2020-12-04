const Sequelize = require('sequelize')


    // conexao com banco de dados // connect whit database

    const sequelize = new Sequelize('siscad','root','',{

        host: 'localhost',
        port: '3038',
        dialect: 'mysql' 
    })


    module.exports = {

        Sequelize: Sequelize,
        sequelize: sequelize
    }