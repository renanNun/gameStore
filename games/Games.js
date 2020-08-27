const Sequelize = require('sequelize');
const connection = require('../database/database');
const Category = require('../categories/Category');

const Game = connection.define('games', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false
    }, price: {
        type: Sequelize.FLOAT,
        allowNull: false
    }, year: { 
        type: Sequelize.INTEGER,
        allowNull: false
    }, description: {
        type: Sequelize.TEXT,
        allowNull: false
    }, developer: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Category.hasMany(Game);
Game.belongsTo(Category);

//Game.sync({force: false});

module.exports = Game;