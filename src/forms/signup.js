const yup = require('yup')
const { passwordRegex } = require('../utils/regex')
const { AllowedLeadSources, AllowedGenders } = require('../utils/constants')

const signUpForm = yup.object({
  name: yup.string().min(3).max(125).required(),
  email: yup.string().email().required(),
  phone: yup.number().min(6000000000).max(9999999999).required(),
  password: yup
    .string()
    .matches(
      passwordRegex,
      'password can only contain alfabets and symbols and numbers EX: @abC123!, and minimum 8 characters'
    )
    .required(),
  gender: yup.string().oneOf(AllowedGenders).required(),
  leadSource: yup
    .array()
    .of(yup.string().oneOf(AllowedLeadSources))
    .required('please select at least one source'),
  city: yup.string().required(),
  state: yup.string().required()
})

function signUpFormValidator(req, res, next) {
  signUpForm
    .validate(req.body)
    .then((value) => {
      res.body = {
        ...value
      }
      next()
    })
    .catch((err) => {
      console.log(err)
      return res
        .status(400)
        .json({ message: 'validation failed', error: err.errors })
    })
}

module.exports = signUpFormValidator
