'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entry extends Model {
    static associate(models) {
      // define association here
    }
  }
  Entry.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    content: {
        type: DataTypes.STRING(50000),
        allowNull: true,
    }
  }, {
    sequelize,
    modelName: 'Entry',
    timestamps: true,
    underscored: true
  });
  return Entry;
};