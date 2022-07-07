const { skillsListe } = require('../models/skills');

exports.skillsListe = async (req, res, next) => {
    try {
        const skills = await skillsListe();
        console.log(skills);
        res.render('skills')
    } catch(e) {
        next(e);
    }
}