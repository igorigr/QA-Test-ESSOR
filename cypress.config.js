const { defineConfig } = require('cypress');
const webpack = require('@cypress/webpack-preprocessor');
const optionsWebPack = {
  webpackOptions: require('./webpack.config'),
  watchOptions: {}
};
const { Client } = require('pg');

module.exports = defineConfig({
  projectId: 'myqx6c',
  video: true,
  videoCompression: false,
  chromeWebSecurity: false,
  trashAssetsBeforeRuns: true,
  defaultCommandTimeout: 40000,
  includeShadowDom: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportDir: "cypress/results",
    reportPageTitle: 'Resultado dos Testes',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      config.viewportWidth = config.env.width === 'Browser' ? 1920 : 412;
      config.viewportHeight = config.env.height === 'Browser' ? 1080 : 915;

      const specPattern = require('./cypress/config/specFiles.json');
      config.specPattern = config.env.specPattern !== undefined ? specPattern[config.env.specPattern] : specPattern['regressao'];

      const file = config.env.file ? config.env.file : 'test.json';
      config.env = require(`./cypress/env/${file}`);

      global.tempTest = {};

      on('task', {
        setTempKeyValue(object) {
          global.tempTest = {
            ...global.tempTest,
            ...object
          };
          return null;
        },
        getTempKeyValue(key) {
          return global.tempTest[key] !== undefined ? global.tempTest[key] : '';
        }
      });

      on('file:preprocessor', webpack(optionsWebPack));

      return config;
    }
  }
});
