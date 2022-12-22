'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SexoPet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SexoPet.hasMany(models.Pet);
    }
  }
  SexoPet.init({
    sexoPet: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SexoPet',
  });
  return SexoPet;
};