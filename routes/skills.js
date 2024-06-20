var express = require('express');
var router = express.Router();

const skillsController = require('../controllers/skills');

// GET /eateries
router.get('/', skillsController.index);
// GET /eateries/:id
router.get('/:id', skillsController.show);

module.exports = router;
