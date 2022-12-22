'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pet.belongsTo(models.RacaPet, models.SexoPet, models.TipoPelo, models.TipoPet);
      Pet.hasMany(models.Anuncio)
    }
  }
  Pet.init({
    nome: DataTypes.STRING,
    foto: DataTypes.TEXT,
    racapetId: DataTypes.INTEGER,
    sexopetId: DataTypes.INTEGER,
    tipopeloId: DataTypes.INTEGER,
    tipopetId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pet',
  });
  return Pet;
};