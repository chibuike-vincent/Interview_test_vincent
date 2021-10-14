const express = require('express')
const router = express.Router();
const userController = require('../controller/user');
const auth = require("../middlewear/auth")

router.post('/signup', userController.signUp);
router.post('/signin', userController.signIn);
router.get('/drugs', auth,userController.getDrugs);

module.exports = router;


