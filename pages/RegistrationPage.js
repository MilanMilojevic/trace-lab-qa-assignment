const { expect } = require('@playwright/test');

class RegistrationPage {
  constructor(page) {
    this.page = page;

    // Input fields
    this.username = page.locator("id=ContentPlaceHolder1_txtUserName");
    this.email = page.locator("id=ContentPlaceHolder1_txtEmail");
    this.confirmEmail = page.locator("id=ContentPlaceHolder1_txtConfirmEmail");
    this.password = page.locator("id=ContentPlaceHolder1_txtPassword");
    this.confirmPassword = page.locator("id=ContentPlaceHolder1_txtPassword2");

    // Checkboxes
    this.terms = page.locator("id=ContentPlaceHolder1_MyCheckBox");
    this.newsletter = page.locator(
      "id=ContentPlaceHolder1_SubscribeNewsletter"
    );

    // Buttons
    this.submitButton = page.locator("id=ContentPlaceHolder1_btnRegister");

    // Error warnings
    this.usernameError = page.locator(
      "id=ContentPlaceHolder1_txtUserName-error"
    );
    this.emailError = page.locator("id=ContentPlaceHolder1_txtEmail-error");
    this.confirmEmailError = page.locator(
      "id=ContentPlaceHolder1_txtConfirmEmail-error"
    );
    this.passwordError = page.locator(
      "id=ContentPlaceHolder1_txtPassword-error"
    );
    this.confirmPasswordError = page.locator(
      "id=ContentPlaceHolder1_txtPassword2-error"
    );
    this.termsError = page.locator(
      "id=ctl00_ContentPlaceHolder1_MyCheckBox-error"
    ); // Pay attention to correct ID here

    // Map for dynamic error field lookup
    this.errorLocators = {
      username: this.usernameError,
      email: this.emailError,
      confirmEmail: this.confirmEmailError,
      password: this.passwordError,
      confirmPassword: this.confirmPasswordError,
      terms: this.termsError,
    };
  }

  async navigate() {
    await this.page.goto("https://etherscan.io/register", {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });
  }

  async fillRegistrationForm({
    username,
    email,
    confirmEmail,
    password,
    confirmPassword,
    subscribe,
  }) {
    await this.username.fill(username);
    await this.email.fill(email);
    await this.confirmEmail.fill(confirmEmail);
    await this.password.fill(password);
    await this.confirmPassword.fill(confirmPassword);
    await this.terms.click();
    if (subscribe) await this.newsletter.check();
  }

  async submitForm() {
    await this.submitButton.click();
  }
  async validateFieldErrors(expectedErrors) {
    for (const [field, expectedMessage] of Object.entries(expectedErrors)) {
      const locator = this.errorLocators[field];
      if (!locator) {
        throw new Error(`No error locator defined for field "${field}"`);
      }
      await expect(locator).toBeVisible();
      const actualText = await locator.textContent();
      expect(actualText.trim()).toBe(expectedMessage);
    }
  }
}
module.exports = RegistrationPage;
