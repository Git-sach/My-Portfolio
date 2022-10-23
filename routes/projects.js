const router = require('express').Router();
const { projectsListe } = require('../controllers/projects')

    router.get('/', projectsListe);

module.exports = router