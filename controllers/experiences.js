const { experiencesListe } = require('../models/experiences');
const { skillsExperiencesListe } = require('../models/experience_skills');

exports.experiencesListe = async (req, res, next) => {
    // res.render('experiences/experiences');
    try {
        const listeExperiences = await skillsExperiencesListe();
        // res.json(listeExperiences);
        res.render('experiences/experiences', {listeExperiences})
    } catch (e) {
        console.log(e);
    }
};