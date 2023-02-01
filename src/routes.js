const router = require('express').Router();

const entriesController = require('./controllers/entriesController');

router.use('/entries', entriesController);

module.exports = router;