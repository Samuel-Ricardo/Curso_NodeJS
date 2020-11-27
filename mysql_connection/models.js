const Sequelize = require('sequelize')

// connect whit database
const sequelize = new Sequelize("siscad","root","",{
    host: "localhost",
    port: "3308",
    dialect: "mysql"  
})

//Criar uma tabela // Create a table
const postagem = sequelize.define('postagems', {

    title: {
        type: Sequelize.STRING
    },

    conteudo: {
        type: Sequelize.TEXT
    }

})
