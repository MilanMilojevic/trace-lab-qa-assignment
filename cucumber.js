module.exports = {
  default: {
    format: [
      'progress', // or 'pretty' for more detailed output
      ['allure-cucumberjs/reporter', 'allure-results/allure-output.txt']
    ],
    formatOptions: {
      'allure-cucumberjs/reporter': {
        resultsDir: 'allure-results'
      }
    },
  }
};
