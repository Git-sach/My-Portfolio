const { skillsExperiencesListe } = require('../models/experience_skills');

exports.experiencesListe = async (req, res, next) => {
    try {
        const listeExperiences = await skillsExperiencesListe();
        listeExperiences.forEach(experience => {
            experience.CRLFtoHTML()
        });
        // res.json(listeExperiences);
        res.render('experiences/experiences', {listeExperiences})
    } catch (e) {
        console.log(e);
    }
};