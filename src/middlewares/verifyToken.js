const jwt = require('jsonwebtoken')

const Customer = require('../models/Customer')

async function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header not found' })
  }
  const token = authHeader.split(' ')[1] //NOTE: remove Bearer keyword
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    await Customer.findOne({ email: decoded.email })
      .then((customer) => {
        req.customer = customer
        next()
      })
      .catch((error) => {
        return res
          .status(401)
          .json({ message: 'Customer not found', error: error })
      })
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' })
  }
}

module.exports = {
  verifyToken: verifyToken
}
