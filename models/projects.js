const projectsModel = require('../database/model/projects');

exports.projectsListe = () => {
    return projectsModel.findAll();
}