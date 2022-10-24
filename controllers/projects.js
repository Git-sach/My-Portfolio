const { skillsListeIsVisibleProjects } = require('../models/skills');
const { skillsProjectsListe, projectsIdListePerSkillsIds, projectsSkillsListePerSkillsIds } = require('../models/projects_skills');

exports.projectsListe = async (req, res, next) => {
    try {
        const projects = await skillsProjectsListe();
        const allSkills = await skillsListeIsVisibleProjects();
        // res.json(projectsSkills);
        res.render('projects/projects', {projects, allSkills});
    } catch (e){
        console.log(e);
    }
};

exports.projectsListeWithSkillsFilter = async (req, res, next) => {
    try {
        let arraySkillsIds = req.params.ids;
        console.log(arraySkillsIds);
        if(arraySkillsIds !== 'all'){
            arraySkillsIds = arraySkillsIds.split([',']);
            const projectsIds = await projectsIdListePerSkillsIds(arraySkillsIds);
            const projectsFormate  = projectsIds.map((value) => value.projectId);
            const projects = await projectsSkillsListePerSkillsIds(projectsFormate);
            res.render('projects/projects-liste', { projects })
        } else {
            const projects = await skillsProjectsListe();
            res.render('projects/projects-liste', { projects })
        }
        
    } catch (e) {
        next(e)
    }
}