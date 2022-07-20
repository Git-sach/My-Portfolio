const skillsModel = require('../database/model/skills');
const { Op } = require('sequelize');

exports.skillsListe = () => {
    return skillsModel.findAll();
};

exports.skillsShearch = (search) => {
    return skillsModel.findAll({
        where: {
            name: {
                [Op.like]: '%' + search + '%'
            }
        }
    });
}