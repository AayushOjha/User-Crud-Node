const mongoose = require('mongoose')
const { AllowedLeadSources, AllowedGenders } = require('../utils/constants')

const CustomerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true, unique: true },
    password: { type: String, required: true },
    gender: {
      type: String,
      enum: AllowedGenders,
      default: 'male'
    },
    leadSource: {
      type: [String],
      enum: AllowedLeadSources,
      required: true
    },
    city: { type: String, required: true },

    state: { type: String, required: true }
  },
  { timestamps: true }
)

const Customer = mongoose.model('Customer', CustomerSchema)
module.exports = Customer
