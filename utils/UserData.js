const { subscribe } = require("diagnostics_channel");


const Users = {

  validUser: {
    username: "milanQATest",
    email: "milan.qa+1@example.com",
    confirmEmail: "milan.qa+1@example.com",
    password: "StrongPassword!123",
    confirmPassword: "StrongPassword!123",
    subscribe: false,
  },

  empty: {
    username: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
    subscribe: false,
  },

  shortPass: {
    username: "test",
    email: "a@b.com",
    confirmEmail: "a@b.com",
    password: "123",
    confirmPassword: "123",
    subscribe: false,
  },

  invalidEmail: {
    username: "test",
    email: "not-an-email",
    confirmEmail: "not-an-email",
    password: "StrongPass1!",
    confirmPassword: "StrongPass1!",
    subscribe: false,
  },

  emailMismatch: {
    username: "testUser",
    email: "test@example.com",
    confirmEmail: "different@example.com",
    password: "StrongPass1!",
    confirmPassword: "StrongPass1!",
    subscribe: false,
  },

  passwordMismatch: {
    username: "testUser",
    email: "test@example.com",
    confirmEmail: "test@example.com",
    password: "StrongPass1!",
    confirmPassword: "StrongPass2!",
    subscribe: false,
  },

  longUsername: {
    username: "a".repeat(256),
    email: "a@b.com",
    confirmEmail: "a@b.com",
    password: "StrongPass1!",
    confirmPassword: "StrongPass1!",
    subscribe: false,
  },

  missingConfirmEmail: {
    username: "testUser",
    email: "test@example.com",
    confirmEmail: "",
    password: "StrongPass1!",
    confirmPassword: "StrongPass1!",
    subscribe: false,
  },

  missingConfirmPassword: {
    username: "testUser",
    email: "test@example.com",
    confirmEmail: "test@example.com",
    password: "StrongPass1!",
    confirmPassword: "",
    subscribe: false,
  },

  noTermsAgreement: {
    username: "testUser",
    email: "test@example.com",
    confirmEmail: "test@example.com",
    password: "StrongPass1!",
    confirmPassword: "StrongPass1!",
    subscribe: false,
    
  },

  invalidCharsUsername: {
    username: "invalid!@#",
    email: "test@example.com",
    confirmEmail: "test@example.com",
    password: "StrongPass1!",
    confirmPassword: "StrongPass1!",
    subscribe: false,
  },

  duplicateEmail: {
    username: "anotherUser",
    email: "milan.qa+1@example.com",
    confirmEmail: "milan.qa+1@example.com",
    password: "AnotherStrong!123",
    confirmPassword: "AnotherStrong!123",
    subscribe: false,
  },

  maxLengthFields: {
    username: "u".repeat(255),
    email: `${"e".repeat(64)}@example.com`, // local part max is 64 chars
    confirmEmail: `${"e".repeat(64)}@example.com`,
    password: "StrongPassword!1234567890",
    confirmPassword: "StrongPassword!1234567890",
    subscribe: true,
  },

  unicodeCharacters: {
    username: "тестирањеQA😊",
    email: "тест@пример.срб",
    confirmEmail: "тест@пример.срб",
    password: "ЈакаЛозинка!123",
    confirmPassword: "ЈакаЛозинка!123",
    subscribe: false,
  },
};

module.exports = { Users };
