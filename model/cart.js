const Sequelize = require("sequelize");

const sequelize = require("../config/db");
const Cart = sequelize.define(
    "cart",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        book_name:{
            type:Sequelize.STRING,
        },
        auther_name:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        price:{
            type:Sequelize.INTEGER,
            allowNull: false
        },
        description:{
            type: Sequelize.STRING,
            allowNull: false
        },
        quantity: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }
    },
    { indexes: [{ unique: true, fields: ['id'] }],
      paranoid: true,
    }
);

module.exports = Cart