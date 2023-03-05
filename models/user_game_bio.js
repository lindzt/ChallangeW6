'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_game_bio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_game_bio.init({
    date_of_birth: {
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    place_of_birth: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: 5,
      }
    },
    hobby: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: 5
      }
    }, 
  }, {
    sequelize,
    modelName: 'user_game_bio',
  });
  return user_game_bio;
};