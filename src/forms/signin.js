const yup = require('yup')
const { passwordRegex, alphanumericRegex } = require('../utils/regex')

const signInForm = yup.object({
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(passwordRegex, 'please enter a valid password')
    .required()
})

function signInFormValidator(req, res, next) {
  signInForm
    .validate(req.body)
    .then((value) => {
      res.body = {
        ...value
      }
      next()
    })
    .catch((err) => {
      return res
        .status(400)
        .json({ message: 'validation failed', error: err.errors })
    })
}

module.exports = signInFormValidator
