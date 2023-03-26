'use strict';
const {
  Model
} = require('sequelize');



const { options } = require('../routes');
const { isAbsolute } = require('path');
module.exports = (sequelize, DataTypes) => {
  class user_game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user_game.belongsTo(models.user, {
        foreignKey : 'userId',
        onDelete : 'CASCADE'
      })
    }
  }
  user_game.init({
      username: {
        type: DataTypes.STRING,
        validate: {
          len: 5,
          isAlphanumeric: true,
        },
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          is: /^[0-9a-zA-Z]{6}$/i
        },
        allowNull: false
      },
  }, {
    sequelize,
    modelName: 'user_game',
  });
  
  return user_game;
};