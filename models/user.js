'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.user_game,{
        foreignKey : 'userId'
      })
    }
  }
  user.init({
    username: {
      type: DataTypes.STRING,
      validate: {
        len: 5,
        isAlphanumeric: true,
        isUnique: (value, next) => {
          user.findAll({
            where: { username: value }
          })
          .then((user) => {
            if (user.length != 0) {
              next(new Error('username already in use'));
            }
            next();
          });
        }
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
    isAdmin: {
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize,
    modelName: 'user',
  });

  user.addHook('afterValidate', (user, options) => {
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(user.password, salt);
  });

  user.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  }

  user.prototype.generateToken = function() {
    const payload = {
      id: this.id,
      username: this.username,
      isAdmin: this.isAdmin
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET || 'secret', { expiresIn: '1 day' });
    return token;
  }

  return user;
};