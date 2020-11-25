const Sequelize = require('sequelize')

const sequelize = new Sequelize("siscad","root","",{
    host: "localhost",
    dialect: "mysql"  
})

sequelize.authenticate().then(function(){

}).catch(() => {
    
})