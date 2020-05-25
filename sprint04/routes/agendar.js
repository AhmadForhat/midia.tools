var express = require('express');
var router = express.Router();

const agendarController = require('../controllers/agendarController')

const auth = require('../middlewares/auth')


router.get('/', auth, agendarController.create);


module.exports = router;