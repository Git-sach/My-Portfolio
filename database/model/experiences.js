const { Sequelize, Model } = require('sequelize');
const sequelize = require('../index');

class Experiences extends Model {
    CRLFtoHTML(){
        this.description = this.description.replace(/\n\r?/g, '<br>');
        this.description = this.description.replace(/\t/g, '<dd>');// a revoir, faire a propre balise ??
    }
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