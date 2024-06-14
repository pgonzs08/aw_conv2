const express = require('express');
const router = express.Router();
const indexController = require('../controllers/home_controller');

router.get('/', indexController.getHomePage);

module.exports = router;