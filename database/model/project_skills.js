const { Sequelize, Model } = require('sequelize');
const sequelize = require('../index');
const Projects = require('./projects');
const Skills = require('./skills');


class Project_skills extends Model {
};

Project_skills.init(
  {
      projectId: {
          type: Sequelize.INTEGER,
          references: {
            model: Projects,
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

module.exports = Project_skills;