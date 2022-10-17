const router = require('express').Router();
const experiences_router = require('./experiences');
const skills_router = require('./skills');

router.get('/', (req, res, next) => {
    res.render('accueil/accueil')
});

router.use('/skills', skills_router);
router.use('/experiences', experiences_router);

module.exports = router;