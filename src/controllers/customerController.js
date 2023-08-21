const Contact = require('../models/Contacts')

// Controller action to get all contacts for a particular customer
exports.getAllContactsForCustomer = async (req, res) => {
  try {
    // Find all contacts associated with the customer
    const contacts = await Contact.find({ customerId: req.customer._id }).exec()

    res.status(200).json(contacts)
  } catch (error) {
    console.error('Error getting contacts:', error)
    res.status(500).json({ message: 'Error getting contacts' })
  }
}

exports.addContact = async (req, res) => {
  try {
    await Contact.create({
      ...req.body,
      customerId: req.customer._id
    })
    this.getAllContactsForCustomer(req, res)
  } catch (error) {
    res.status(500).json({ message: 'Error adding contact', error: error })
  }
}
