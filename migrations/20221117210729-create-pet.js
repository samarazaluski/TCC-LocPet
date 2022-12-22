'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      foto: {
        type: Sequelize.TEXT
      },
      racapetId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'racapets', 
          key: 'id',
        }
      },
      sexopetId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'sexopets',
          key: 'id'
        }
      },
      tipopeloId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'tipopelos',
          key: 'id'
        }
      },
      tipopetId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'tipopets',
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
    await queryInterface.dropTable('Pets');
  }
};