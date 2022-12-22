'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RacaPet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RacaPet.hasMany(models.Pet);
    }
  }
  RacaPet.init({  
    descRaca: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RacaPet',
  });
  return RacaPet;
};