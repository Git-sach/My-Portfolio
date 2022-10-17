const router = require('express').Router();
const { projectsListe } = require('../controllers/project')

    router.get('/', projectsListe);

module.exports = router