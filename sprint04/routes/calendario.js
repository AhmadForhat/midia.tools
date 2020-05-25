var express = require('express');
var router = express.Router();

const calendarioController = require('../controllers/calendarioController')

const auth = require('../middlewares/auth')


router.get('/', auth, calendarioController.create);


module.exports = router;