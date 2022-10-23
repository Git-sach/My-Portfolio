const projectsModel = require('../database/model/projects');
const skillsModel = require('../database/model/skills');
const project_skillsModel = require('../database/model/project_skills');

exports.skillsProjectsListe = () => {
    projectsModel.belongsToMany(skillsModel, {through: project_skillsModel});
    const response = projectsModel.findAll({
        include: [skillsModel]
    });
    return response
};