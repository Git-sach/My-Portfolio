const { Sequelize, Model } = require('sequelize');
const sequelize = require('../index');

class Skills extends Model {
}

Skills.init(
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        logo: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        is_visible_projects: {
            type: Sequelize.BOOLEAN
        },
    }, {
        sequelize,
        modelName: 'skills',
        timestamps: false
});

module.exports = Skills;