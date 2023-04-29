// const express = require('express');
// const router = express.Router();

// const contactsController = require('../controllers/contacts');

// router.get('/', contactsController.getAll);

// router.get('/:id', contactsController.getSingle);
// router.get('/test', contactsController.getTest);

// module.exports = router;

const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

module.exports = router;