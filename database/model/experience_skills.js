const { Sequelize, Model } = require('sequelize');
const sequelize = require('../index');
const Experiences = require('./experiences');
const Skills = require('./skills');

/**
 * La table de lisaison doit avoir les même nom que Sequelize vas donner. c'est dire <non de la table au singulier> + <Id>
 * Il n'est pas obligatoir de créer. On peut ne pas créer le modèle de la table de liaison et ne pas créer la table en BDD et faire:
 * try {
         const experience_skills = sequelize.define(
            "experience_skills",
            {},
            { timestamps: false }
          );

        experiences.belongsToMany(skills, {through: experience_skills});
        await experience_skills.sync();

    } 
    Cela vas créer automatiquement la table en BDD
 */

class Experience_skills extends Model {

};

Experience_skills.init(
    {
        experienceId: {
            type: Sequelize.INTEGER,
            references: {
              model: Experiences,
              key: 'id'
            }
        },
        skillId: {
            type: Sequelize.INTEGER,
            references: {
              model: Skills,
              key: 'id'
            }
        }
    },{
        sequelize,
        timestamps: null
});

module.exports = Experience_skills;