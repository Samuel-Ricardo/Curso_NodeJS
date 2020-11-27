const Sequelize = require('sequelize')

// connect whit database
const sequelize = new Sequelize("siscad","root","",{
    host: "localhost",
    port: "3308",
    dialect: "mysql"  
})

// verify connection
sequelize.authenticate().then(function(){

    console.log("Conectado com sucesso")

}).catch((error) => {
    
    console.log('Erro ao Conectar: '+ error)

})