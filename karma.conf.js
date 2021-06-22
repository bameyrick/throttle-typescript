const process = require('process');
process.env.CHROME_BIN = require('puppeteer').executablePath();

// eslint-disable-next-line
module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', 'karma-typescript'],

    files: ['tests/**/*.ts', 'src/**/*.ts'],

    preprocessors: {
      'tests/**/*.ts': 'karma-typescript',
      'src/**/*.ts': 'karma-typescript',
    },

    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-typescript'),
    ],

    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },

    coverageIstanbulReporter: {
      reports: ['text', 'lcovonly'],
      fixWebpackSourcePaths: true,
      dir: 'coverage',
    },

    karmaTypescriptConfig: {
      bundlerOptions: {
        transforms: [require('karma-typescript-es6-transform')()],
      },
    },

    reporters: ['progress', 'coverage-istanbul'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadlessNoSandbox'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--headless', '--disable-gpu', '--disable-translate', '--disable-extensions'],
      },
    },
    singleRun: process.env.KARMA_SINGLE_RUN !== 'false',
  });
};
