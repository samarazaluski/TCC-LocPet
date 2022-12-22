'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoPet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TipoPet.hasMany(models.Pet);
    }
  }
  TipoPet.init({
    tipoPet: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TipoPet',
  });
  return TipoPet;
};