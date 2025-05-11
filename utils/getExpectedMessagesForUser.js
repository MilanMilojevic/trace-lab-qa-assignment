// utils/getExpectedMessagesForUser.js
const { ValidationMessages } = require('./ValidationMessages');

function getExpectedMessagesForUser(userData) {
  const errors = {};

  if (!userData.username) {
    errors.username = ValidationMessages.required.username;
  } else if (userData.username.length < 5) {
    errors.username = ValidationMessages.length.username;
  } else if (/[^a-zA-Z0-9]/.test(userData.username)) {
    errors.username = ValidationMessages.invalid.username;
  }

  if (!userData.email) {
    errors.email = ValidationMessages.required.email;
  } else if (!userData.email.includes('@')) {
    errors.email = ValidationMessages.invalid.email;
  }

  if (!userData.confirmEmail) {
    errors.confirmEmail = ValidationMessages.required.confirmEmail;
  } else if (userData.confirmEmail !== userData.email) {
    errors.confirmEmail = ValidationMessages.mismatch.email;
  }

  if (!userData.password) {
    errors.password = ValidationMessages.required.password;
  } else if (userData.password.length < 8) {
    errors.password = ValidationMessages.length.password;
  }

  if (!userData.confirmPassword) {
    errors.confirmPassword = ValidationMessages.required.confirmPassword;
  } else if (userData.confirmPassword !== userData.password) {
    errors.confirmPassword = ValidationMessages.mismatch.password;
  }

  if ('agreeToTerms' in userData && !userData.agreeToTerms) {
    errors.terms = ValidationMessages.required.terms;
  }

  return errors;
}

module.exports = getExpectedMessagesForUser;
