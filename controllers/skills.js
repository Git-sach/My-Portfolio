const { skillsListe } = require('../models/skills');
const { skillslibraryListe } = require('../models/skills_library');

exports.skillsListe = async (req, res, next) => {
    try {
        const skills = await skillsListe();
        const skills_library = await skillslibraryListe();
        //res.send(skills_library)
        res.render('skills', {skills, skills_library})
    } catch(e) {
        next(e);
    }
}