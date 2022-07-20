const router = require('express').Router();
const { skillsListe, shearchSkillsListe } = require('../controllers/skills')

router.get('/', (req, res) => {
    res.end('hello');
});

router.get('/skills/search/:search', shearchSkillsListe);
router.get('/skills', skillsListe);

module.exports = router;