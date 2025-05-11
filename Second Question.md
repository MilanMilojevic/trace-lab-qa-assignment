Answer to: Explain what type of tools you would use to enable an automatic testing system for the task above and how they would be utilized.

---

Tools Used for Automating Etherscan Registration Form Testing

To automate the testing of the Etherscan registration form, I used Playwright, Cucumber, and Allure, each serving a specific role:

---

1. Playwright – Test Automation Framework

Automates browser actions like filling out fields, clicking buttons, and checking validations.
Supports multiple browsers and handles dynamic content well.
Used for executing real user interactions on the Etherscan form.

---

2. Cucumber – BDD Framework

Allows writing test scenarios in human-readable Gherkin syntax (`Given/When/Then`).
Scenarios map to Playwright-based step definitions in code.
Makes it easy to communicate test cases with non-technical stakeholders.

---

3. Allure – Test Reporting Tool

Generates detailed test reports with screenshots, logs, and step-by-step execution.
Helps with debugging and gives clear insights into test results.

---

How They Work Together

Cucumber defines the test scenarios.
Playwright runs the tests and interacts with the browser.
Allure collects results and generates interactive reports.


