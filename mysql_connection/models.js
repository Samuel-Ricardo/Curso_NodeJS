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

// Sincroniza com o banco, fazendo assim ele criar a tabela // Synchronizes with the database, making it create the table //

postagem.sync({
   // para garantir que a tabela será criada // to make sure the table will be created //
    force: true
})