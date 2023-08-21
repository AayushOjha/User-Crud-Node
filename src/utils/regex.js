const passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+\-]{8,30}$/ // minimum length - 8 characters
const alphanumericRegex = /^[a-zA-Z0-9]{3,15}$/

module.exports = {
  passwordRegex: passwordRegex,
  alphanumericRegex: alphanumericRegex
}
