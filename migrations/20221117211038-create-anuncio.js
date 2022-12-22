'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Anuncios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      petId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'pets',
          key: 'id'
        }
      },
      tipoanuncioId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'tipoanuncios',
          key: 'id'
        }
      },
      perfilId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'perfils',
          key: 'id'
        }
      },
      locationId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'locations',
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
    await queryInterface.dropTable('Anuncios');
  }
};