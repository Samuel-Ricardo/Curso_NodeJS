const dataBase = require('../DAO/ConnectionFactory')



const Post = dataBase.sequelize.define('postagems', {

    title: {
        type: dataBase.Sequelize.STRING
    },

    conteudo: {
        type: dataBase.Sequelize.TEXT 
    }
})

/*

// Deve ser executado apenas uma vez, para criar a tabela // Must be executed only once, to create the table // 

Post.sync({force: true})

*/

module.exports = Post;

