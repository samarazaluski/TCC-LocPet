const Sequelize = require('sequelize');
const database = require('../database/connection');

const User = database.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
    },
    senha: {
        type: Sequelize.STRING,
    },
});
// User.sync({ force: true });
User.sync();

module.exports = User;