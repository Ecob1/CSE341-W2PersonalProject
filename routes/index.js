// const routes = require('express').Router();
// const contactController = require('../controllers/contacts');
// const myController = require('../controllers');

// routes.get('/', myController.awesomeFunction);

// routes.get('/awesome', myController.returnAnFunction);
// routes.get('/', contactController.getAllContact);
// routes.get('/:id', contactController.getSingle);
// module.exports = routes;

const express = require('express');
const router = express.Router();

router.use('/contacts', require('./contacts'))

module.exports = router;