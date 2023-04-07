const router = require('express').Router();

const entriesController = require('./controllers/entriesController');
const imagesController = require('./controllers/imagesController');

router.use('/entries', entriesController);
router.use('/images', imagesController);

module.exports = router;