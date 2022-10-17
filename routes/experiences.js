const router = require('express').Router();
const { experiencesListe } = require('../controllers/experiences');

router.get('/', experiencesListe);

module.exports = router;