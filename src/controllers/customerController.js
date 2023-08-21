const Customer = require('../models/Customer')
const Contact = require('../models/Contacts')

// Controller action to get all contacts for a particular customer
exports.getAllContactsForCustomer = async (req, res) => {
  try {
    // Find all contacts associated with the customer
    const contacts = await Contact.find({ customerId: req.customer._id })

    res.status(200).json(contacts)
  } catch (error) {
    console.error('Error getting contacts:', error)
    res.status(500).json({ message: 'Error getting contacts' })
  }
}
