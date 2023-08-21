const router = require('express').Router()

const customerController = require('../controllers/customerController')

router.get('/get_contacts', customerController.getAllContactsForCustomer)

// router.post('/sign_in', signInFormValidator, authController.signIn)

module.exports = router
