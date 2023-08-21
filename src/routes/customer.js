const router = require('express').Router()

const customerController = require('../controllers/customerController')

router.get('/get_contacts', customerController.getAllContactsForCustomer)

router.post('/add_contact', customerController.addContact)

module.exports = router
