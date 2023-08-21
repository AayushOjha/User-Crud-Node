const _ = require('lodash')
const AES = require('crypto-js/aes')
const utf = require('crypto-js/enc-utf8')

const { generateToken } = require('../utils/helpers/tokenGenerator')

const Customer = require('../models/Customer')

exports.register = async (req, res) => {
  const encryptedPassword = AES.encrypt(
    req.body.password,
    process.env.PASSWORD_HASHING_KEY
  ).toString()

  const newCustomer = new Customer({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    gender: req.body.gender,
    leadSource: req.body.leadSource,
    city: req.body.city,
    state: req.body.state,
    password: encryptedPassword
  })

  newCustomer
    .save()
    .then((customer) => {
      res.header(201).send(customer)
    })
    .catch((error) => {
      res.header(500).send({ message: error.message })
    })
}

exports.signIn = async (req, res) => {
  const { email, password } = req.body
  const user = await Customer.findOne({ email })
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' })
  }
  const decryptedPassword = AES.decrypt(
    user.password,
    process.env.PASSWORD_HASHING_KEY
  ).toString(utf)
  if (password !== decryptedPassword) {
    return res.status(401).json({ message: 'Invalid email or password' })
  }
  const token = generateToken(req.body)
  res.json({ message: 'Successfully signed in', token: token })
}
