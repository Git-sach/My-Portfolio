const { Sequelize, Model } = require('sequelize');
const sequelize = require('../index');
const Skills = require('./skills');

class Skills_library extends Model {

};

Skills_library.init({
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        parent_skill_id:{
            type: Sequelize.INTEGER,
            references: { //utile ???
                model: Skills.Skills,
                key: 'id'
            }
        },
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        logo: {
            type: Sequelize.STRING
        }
    },{
        sequelize,
        timestamps: false
});

module.exports = Skills_library