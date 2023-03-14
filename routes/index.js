const router = require('express').Router();
const experiences_router = require('./experiences');
const skills_router = require('./skills');
const project_router = require('./projects');

router.get('/', (req, res, next) => {
    res.render('accueil/accueil')
});
router.get('/accueil', (req, res, next) => {
    res.redirect('/');
});
router.get('/contact', (req, res, next) => {
    res.render('contact/contact')
});

router.use('/skills', skills_router);
router.use('/experiences', experiences_router);
router.use('/projects', project_router);

router.get('/:all', (req, res, next) => {
    res.end('404');
})

module.exports = router;