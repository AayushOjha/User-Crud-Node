const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define the schema for the address subdocument
const addressSchema = new mongoose.Schema({
  addressLine1: { type: String, required: true },
  addressLine2: String,
  city: { type: String, required: true },
  pinCode: { type: String, required: true },
  state: { type: String, required: true }
})

const contactsSchema = new Schema(
  {
    customerId: {
      type: Schema.Types.ObjectId,
      ref: 'Customer',
      required: true
    },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: addressSchema // Embed the address subdocument
  },
  { timestamps: true }
)

module.exports = mongoose.model('Contact', contactsSchema)
