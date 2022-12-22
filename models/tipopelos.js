'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoPelos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TipoPelos.hasMany(models.Pet);
    }
  }
  TipoPelos.init({
    tipoPelos: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TipoPelos',
  });
  return TipoPelos;
};