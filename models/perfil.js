'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Perfil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Perfil.belongsTo(models.User);
      Perfil.hasMany(models.Anuncio);
    }
  }
  Perfil.init({
    foto: DataTypes.TEXT,
    celular: DataTypes.STRING,
    notificacao: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Perfil',
  });
  return Perfil;
};