const { skillsListe } = require('../models/skills');
const { skillsProjectsListe } = require('../models/projects_skills');

exports.projectsListe = async (req, res, next) => {
    try {
        const projects = await skillsProjectsListe();
        const allSkills = await skillsListe();
        // res.json(projects);
        res.render('projects/projects', {projects, allSkills});
    } catch (e){
        next(e);
    }
}