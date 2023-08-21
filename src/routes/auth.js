const router = require('express').Router()

const authController = require('../controllers/authController')
const signUpFormValidator = require('../forms/signup')
const signInFormValidator = require('../forms/signin')

// TODO: use a middleware to senitze data comming to end point

router.post('/register', signUpFormValidator, authController.register)

router.post('/sign_in', signInFormValidator, authController.signIn)

module.exports = router
