const experiencesModel = require('../database/model/experiences');

exports.experiencesListe = () => {
    return experiencesModel.findAll();
};