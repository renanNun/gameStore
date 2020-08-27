const Sequelize = require('sequelize');

const connection = new Sequelize('gamestore','root','Agumon', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
});

module.exports = connection;