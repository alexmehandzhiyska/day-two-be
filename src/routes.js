const router = require('express').Router();

const entriesController = require('./controllers/entriesController');
const imagesController = require('./controllers/imagesController');

const swaggerUi = require('swagger-ui-express');
const { swaggerOptions } = require('./swagger');

router.use('/entries', entriesController);
router.use('/images', imagesController);

router.use('/docs', swaggerUi.serve);
router.get('/docs', swaggerUi.setup(swaggerOptions));

module.exports = router;