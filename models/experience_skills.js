const experiencesModel = require('../database/model/experiences');
const experience_skillsModel = require('../database/model/experience_skills');
const experience_skills_libraryModel = require('../database/model/experience_skills_library');
const skillsModel = require('../database/model/skills');
const skills_libraryModel = require('../database/model/skills_library');
const sequelize = require('../database/index');

exports.skillsExperiencesListe = async () => {

    experiencesModel.belongsToMany(skillsModel, {through: experience_skillsModel});
    experiencesModel.belongsToMany(skills_libraryModel, {through: experience_skills_libraryModel});

    /**
     * Pour ajouter une association on utilise la methode add-relation automatiquement ajouter par sequelize
     * (dans notre cas elle est donc noté "addSkills")
     */
    // const associedExperience = await experiencesModel.findByPk(2);
    // const associedSlkill = await skillsModel.findByPk(3);
    // await associedExperience.addSkills(associedSlkill, {through: experience_skillsModel})

    // return experiencesModel.findAll({
    //     include: skillsModel
    // });

    const response = experiencesModel.findAll({
        include: [skillsModel, skills_libraryModel]
    });

    return response;
};