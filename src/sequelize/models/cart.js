"use strict";
const { Model } = require("sequelize");

/**
 * @param {import("sequelize").Sequelize} sequelize - Sequelize
 * @param {import("sequelize").DataTypes} DataTypes - Sequelize Column DataTypes
 * @return {Model} - Sequelize Model
 * **/
module.exports = (sequelize, DataTypes) => {
  class cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.cart.belongsTo(models.lecture, { foreignKey: "lecture_id" });
      // define association here
    }
  }
  cart.init(
    {
      cart_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // NOT NULL, Null을 허용하지 않음
        autoIncrement: true, // AUTO_INCREMENT
        primaryKey: true, // PRIMARY KEY, 기본키
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      lecture_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "cart",
      freezeTableName: true,
    });
  return cart;
};
