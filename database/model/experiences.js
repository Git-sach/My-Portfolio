const { Sequelize, Model } = require('sequelize');
const sequelize = require('../index');

class Experiences extends Model {

    CRLFtoHTML(){
        this.description = this.description.replace(/\n\r?/g, '<br>');
        this.description = this.description.replace(/\t/g, '<dd>');// a revoir, faire a propre balise ??
    }

    date_diff(){
        if(!this.date_debut){
            return '??'
        }
        const date_debut = new Date(this.date_debut);
        let date_fin = new Date();
        if(this.date_fin){
            date_fin = new Date(this.date_fin);
        }
        return this.convert_tow_charac(Math.floor((date_fin - date_debut)/1000/60/60/24/30.4167))
    }

    convert_tow_charac(number){
        if(number.toString().length < 2){
            number = '0' + number
        }
        return number
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
        },
        number_of_months: {
            type: Sequelize.VIRTUAL,
            get() {
                return this.date_diff()
            }
        }
    },{
        sequelize,
        timestamps: false
});

module.exports = Experiences;