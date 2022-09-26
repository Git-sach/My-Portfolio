const router = require('express').Router();
const { skillsListe, shearchSkillsListe } = require('../controllers/skills');
const { experiencesListe } = require('../controllers/experiences');

router.get('/', (req, res) => {
    res.end('hello');
});

router.get('/skills/search/:search', shearchSkillsListe);
router.get('/skills', skillsListe);

router.get('/experiences', experiencesListe)

module.exports = router;