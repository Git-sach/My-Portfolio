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
        image: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        company: {
            type: Sequelize.STRING
        },
        logo_company: {
            type: Sequelize.STRING
        },
        customer: {
            type: Sequelize.STRING
        },
        logo_customer: {
            type: Sequelize.STRING
        },
        date_debut: {
            type: Sequelize.DATE
        },
        date_fin: {
            type: Sequelize.DATE
        }
    },{
        sequelize,
        timestamps: false
});

module.exports = Experiences;