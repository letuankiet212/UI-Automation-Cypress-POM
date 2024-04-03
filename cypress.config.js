const { defineConfig } = require('cypress');
const registerReportPortalPlugin = require('@reportportal/agent-js-cypress/lib/plugin');


module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: ['@reportportal/agent-js-cypress', 'mochawesome'],
    reportportalAgentJsCypressReporterOptions: {
    endpoint: '',
    apiKey: 'ui-cypress_vre_4XYBR1GtYM5ku957prWKRyE2vwrLzJg1AUnoOQiO7AL4uTgCcSQspjtsntJl',
    launch: 'ui-automation-cypress',
    project: 'ui-automation-cypress',
    description: 'E-Commerce Automation',
    attributes: [
      {
        key: 'Headed',
        value: 'True',
      }
     
    ],
  },

  mochawesomeReporterOptions: {
    // code : false,
    charts: true,
    hml: true,
    reportPageTitle: 'Cypress Automation Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts:false,
  },
},
  e2e: {
    setupNodeEvents(on, config) {
      return registerReportPortalPlugin(on, config);
    },
    // specPattern: "cypress/e2e/*.cy.js",
    testIsolation: false,
    specPattern:"cypress/EcommerceTests/*.js",
    baseUrl:"https://rahulshettyacademy.com/angularpractice/",
    defaultCommandTimeout : 8000,
    pageLoadTimeout : 10000
  },
  env :{
    //Custom enviromnet variable here
  },
  retries:{
    //tries agian on failure while run
    runMode:1,
    //tries again in gui 
    openMode:0
    
  }
  
});
