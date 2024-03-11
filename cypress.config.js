const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'fd9h3v',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPatter: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}"
  },
});
