const skillsModel = require('../database/model/skills');
const { Op } = require('sequelize');

exports.skillsListe = () => {
    return skillsModel.findAll({
        order: [
            ['favorite', 'DESC'],
            ['name', 'ASC']
        ]
    });
};

exports.skillsListeIsVisibleProjects = () => {
    return skillsModel.findAll({
        where: {
            is_visible_projects: true
        }
    });
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