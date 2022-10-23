const { Sequelize, Model } = require('sequelize');
const sequelize = require('../index')

class Projects extends Model {

}

Projects.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    github: {
        type: Sequelize.STRING
    },
    image: {
        type: Sequelize.STRING
    }
},{
    sequelize,
    timestamps: false
});

module.exports = Projects;