const router = require('express').Router();
const { skillsListe } = require('../controllers/skills')

router.get('/', (req, res) => {
    res.end('hello');
});

router.get('/skills', skillsListe);

module.exports = router;