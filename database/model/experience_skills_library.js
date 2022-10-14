const { Sequelize, Model } = require('sequelize');
const sequelize = require('../index');
const Experiences = require('./experiences');
const Skills_library = require('./skills_library');

class Experience_skills_library extends Model {

};

Experience_skills_library.init(
    {
        ExperienceId: {
            type: Sequelize.INTEGER,
            references: {
              model: Experiences,
              key: 'id'
            }
        },
        SkillsLibraryId: {
            type: Sequelize.INTEGER,
            references: {
              model: Skills_library,
              key: 'id'
            }
        }
    },{
        sequelize,
        timestamps: null
});

module.exports = Experience_skills_library;