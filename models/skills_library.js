const skillsModel = require('../database/model/skills');
const skills_libraryModel = require('../database/model/skills_library');
const { Op } = require('sequelize');

exports.skillsLibraryListe = () => {
    skillsModel.hasMany(skills_libraryModel, { foreignKey: 'parent_skill_id'});
    //skills_libraryModel.belongsTo(skillsModel, { foreignKey: 'parent_skill_id'});

    return skillsModel.findAll({include: skills_libraryModel});
};

exports.skillsSearchLibrary = function (search) {
    skillsModel.hasMany(skills_libraryModel, { foreignKey: 'parent_skill_id'});
    return skillsModel.findAll({
        include: [{
            model: skills_libraryModel,
            where: {
                name: {
                    [Op.like]: '%' + search + '%'
                }
            }
        }]
    });
};