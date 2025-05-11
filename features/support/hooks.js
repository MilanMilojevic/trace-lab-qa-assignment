// features/support/hooks.js
const { Before, After } = require('@cucumber/cucumber');

Before(async function () {
  await this.launchBrowser(); // <- makes sure this.page is ready
});

After(async function () {
  await this.closeBrowser();
});
