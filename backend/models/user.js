'use strict';

const constrainUser = require('../constrain/user');
const validator = require('validator');

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          isNull: true,
          isAlpha: true,
          len: [4, 8],
        },
      },
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  console.log(User.name);
  return User;
};
