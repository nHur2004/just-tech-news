// import the Sequelize constructore from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our database, pass in your MySQL Information for username and pw
const sequelize = new Sequelize('just_tech_news_db', 'root', 'yuQ6tW4#7Lh%', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;