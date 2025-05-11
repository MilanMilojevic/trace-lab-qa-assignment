const ValidationMessages = {
  required: {
    username: "Please enter Username.",
    email: "Please enter a valid email address.",
    confirmEmail: "Please re-enter your email address.",
    password: "Please enter Password.",
    confirmPassword: "Your password must be at least 8 characters long.",
    terms: "Please accept our Terms and Conditions.",
  },
  invalid: {
    email: "Please enter a valid email address.",
    confirmEmail: "Please enter a valid email address.",
    username: "Only alphanumeric characters allowed.",
  },
  mismatch: {
    email: "Email address does not match.",
    password: "Password does not match, please check again.",
  },
  length: {
    password: "Your password must be at least 8 characters long.",
    username: "Please enter at least 5 characters.",
  },
  // duplicate: {
  //   email: "This email is already registered",
  // },
};
module.exports = { ValidationMessages };