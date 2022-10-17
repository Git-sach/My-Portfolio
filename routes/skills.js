const router = require('express').Router();
const { skillsListe, shearchSkillsListe } = require('../controllers/skills');

router.get('/search/:search', shearchSkillsListe);
router.get('/', skillsListe);

module.exports = router;