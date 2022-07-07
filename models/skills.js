const skillsModel = require('../database/model/skills');

exports.skillsListe = () => {
    return skillsModel.findAll();
}