'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Anuncio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Anuncio.belongsTo(models.Perfil, models.Location, models.TipoAnuncio, models.Pet);
    }
  }
  Anuncio.init({
    petId: DataTypes.INTEGER,
    tipoanuncioId: DataTypes.INTEGER,
    perfilId: DataTypes.INTEGER,  
    locationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Anuncio',
  });
  return Anuncio;
};