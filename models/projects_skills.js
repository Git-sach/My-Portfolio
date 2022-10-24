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

exports.projectsIdListePerSkillsIds = (skillsIds) => {
    const projecIdtListe = project_skillsModel.findAll({
        attributes: ['projectId'],
        group: ['projectId'],
        where: {
            skillId: skillsIds
        },
        raw: true
    });

    return projecIdtListe
};

exports.projectsSkillsListePerSkillsIds = (projectsIds) => {
    projectsModel.belongsToMany(skillsModel, {through: project_skillsModel});
    const response = projectsModel.findAll({
        include: [skillsModel],
        where: {
            id: projectsIds
        },
    });
    return response
}