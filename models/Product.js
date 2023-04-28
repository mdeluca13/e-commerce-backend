// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    product_name: {
      type: DataTypes.STRING,
      null: false
    },
    price: {
      type: DataTypes.DECIMAL,
      null: false
      // VALIDATES VALUE IS A DECIMAL
    },
    stock: {
      type: DataTypes.INTEGER,
      null: false,
      default: 10,
      // VALIDATES VALUE IS NUMERIC
    },
    // category_id: {
    //   from: model's id
    // }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
