const router = require('express').Router()

const customerController = require('../controllers/customerController')

router.get('/get_contacts', customerController.getAllContactsForCustomer)

router.post('/add_contact', customerController.addContact)
router.put('/update_contact/:id', customerController.updateContact)
router.delete('/delete_contact/:id', customerController.deleteContact)

module.exports = router
