'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Perfils', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      foto: {
        type: Sequelize.TEXT
      },
      celular: {
        type: Sequelize.STRING
      },
      notificacao: {
        type: Sequelize.CHAR
      },
      userId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'users',
          key: 'id' 
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Perfils');
  }
};