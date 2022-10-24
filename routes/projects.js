const router = require('express').Router();
const { projectsListe, projectsListeWithSkillsFilter } = require('../controllers/projects')

    router.get('/filtersSkillsId/:ids', projectsListeWithSkillsFilter);
    router.get('/', projectsListe);

module.exports = router