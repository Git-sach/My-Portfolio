const { skillsListe, skillsShearch } = require('../models/skills');
const { skillsLibraryListe, skillsSearchLibrary } = require('../models/skills_library');

exports.skillsListe = async (req, res, next) => {
    try {
        const skills = await skillsListe();
        const skills_library = await skillsLibraryListe();
        //res.send(skills_library)
        res.render('skills/skills', {skills, skills_library});
    } catch(e) {
        next(e);
    }
};

exports.shearchSkillsListe = async (req, res, next) => {
    const search = req.params.search;
    try {
        if(search !== "null"){
            const skills = await skillsShearch(search);
            const skills_library = await skillsSearchLibrary(search);
            res.render('skills/skills-liste', {skills, skills_library});
        } else {
            const skills = await skillsListe();
            const skills_library = await skillsLibraryListe();
            res.render('skills/skills-liste', {skills, skills_library});
        }
    } catch(e) {
        next(e);
    }
};