'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Provider extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Provider.init({
    name: DataTypes.STRING,
    cnpj: DataTypes.NUMBER,
    endereco: DataTypes.STRING,
    telefone: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Provider',
  });
  return Provider;
};