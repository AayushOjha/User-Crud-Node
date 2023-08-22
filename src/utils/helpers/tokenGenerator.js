const jwt = require('jsonwebtoken')

function generateToken(user) {
  const payload = {
    email: user.email
  }
  const options = {
    expiresIn: '9d'
  }
  return jwt.sign(payload, process.env.JWT_SECRET, options)
}

module.exports = { generateToken: generateToken }
