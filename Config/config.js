const { Sequelize } = require('sequelize');
require('dotenv').config();

const config = new Sequelize(`${process.env.DATABASE_NAME}`, `${process.env.DATABASE_USERNAME}`, `${process.env.DATABASE_PASSWORD}`, {
    host: `${process.env.DATABASE_HOST}`,
    dialect: `${process.env.DATABASE_DIALECT}`,
    logging:false
  });

module.exports = config
