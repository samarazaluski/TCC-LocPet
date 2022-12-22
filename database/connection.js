const Sequelize = require('sequelize');
const sequelize = new Sequelize("locpet", "root", "admin",
    {
        host: "localhost",
        dialect: "mysql",
        port: 3306
    });

sequelize.authenticate()
    .then(function () {
        console.log("Conectado ao Banco Lopet! ")
    }).catch(function () {
        console.log("ERRO !!! Acesso NEGADO ao Banco Locpet! ")
    });

module.exports = sequelize;