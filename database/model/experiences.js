const { Sequelize, Model } = require('sequelize');
const sequelize = require('../index');

class Experiences extends Model {

};

Experiences.init(
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: Sequelize.INTEGER
        },
        description: {
            type: Sequelize.INTEGER
        },
        company: {
            type: Sequelize.INTEGER
        },
        customer: {
            type: Sequelize.INTEGER
        }
    },{
        sequelize,
        timestamps: false
});

module.exports = Experiences;