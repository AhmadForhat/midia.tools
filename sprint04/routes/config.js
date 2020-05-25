var express = require('express');
var router = express.Router();

const configController = require('../controllers/configController')

const auth = require('../middlewares/auth')


router.get('/', auth, configController.create);


module.exports = router;