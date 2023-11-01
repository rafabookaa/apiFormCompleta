'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Formulario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Formulario.init({
    filial: DataTypes.STRING,
    operadora: DataTypes.STRING,
    solicitante: DataTypes.STRING,
    descricao: DataTypes.STRING,
    chamado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Formulario',
  });
  return Formulario;
};