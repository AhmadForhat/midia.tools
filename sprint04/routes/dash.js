var express = require('express');
var router = express.Router();

const dashController = require('../controllers/dashController')

const auth = require('../middlewares/auth')


router.get('/', auth, dashController.create);


module.exports = router;