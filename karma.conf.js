module.exports = function(config) {
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
			require('karma-jasmine-html-reporter'),
			require('karma-coverage-istanbul-reporter'),
			require('karma-typescript'),
		],

		client: {
			clearContext: false, // leave Jasmine Spec Runner output visible in browser
		},

		coverageIstanbulReporter: {
			reports: ['html', 'karma-typescript', 'lcovonly'],
			fixWebpackSourcePaths: true,
		},

		reporters: ['progress', 'kjhtml'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['Chrome'],
		singleRun: process.env.KARMA_SINGLE_RUN !== 'false',
	});
};
