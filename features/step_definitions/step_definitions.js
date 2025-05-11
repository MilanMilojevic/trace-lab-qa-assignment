const { Given, Then, When } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { expect } = require('@playwright/test');
const RegistrationPage = require('../../pages/RegistrationPage.js');
const { Users } = require('../../utils/UserData.js');
const getExpectedMessagesForUser = require('../../utils/getExpectedMessagesForUser.js');



Given('I open EtherScan registration page', async function () {
    const registrationPage = new RegistrationPage(this.page);
    await registrationPage.navigate()
    await expect(this.page).toHaveURL('https://etherscan.io/register');

}); 
 
Then('I fill registration form using {string}', async function (user) {
    const registrationPage = new RegistrationPage(this.page);
    const users = Users[user];
    await registrationPage.fillRegistrationForm(users);
    await registrationPage.submitForm();

});
Then('I see the correct warning messages for {string}', async function (user) {
  const registrationPage = new RegistrationPage(this.page);
  const userData = Users[user];
  const expectedErrors = getExpectedMessagesForUser(userData);
  await registrationPage.validateFieldErrors(expectedErrors);

});

