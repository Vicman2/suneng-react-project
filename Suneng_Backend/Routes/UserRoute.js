const express = require('express')
const router = express.Router()

const userController = require('../Controller/userController')

const validationMiddleware = require('../Middleware/validateContact')
const userDetailsValidation = require('../Middleware/validateUserDetails')

router.post('/contact',validationMiddleware.validateContatInfo,userController.postContactInfo);
router.post('/signup',userDetailsValidation.validateSignUp, userController.postSignIn)
router.post('/login', userDetailsValidation.validateLogin, userController.login)

module.exports = router