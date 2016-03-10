// Karma configuration
// Generated on Tue Sep 15 2015 12:41:55 GMT+0800 (China Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    // if requirejs used, 
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
    
      // inclueded, default: true, should the files be included in the browser using <script> tag?
      // use false if you want to load them manually. eg using require.js
      // served, default: true, should the files be served by karma's webserver?
      // watched, default: true, if autowatch is true, all files that have set watched to true will be watched for change
      { pattern: 'dist/**/*.js', included: false, served: true },
      { pattern: 'test/**/*.js', included: false, served: true },

      //in version 0.13, the item should be last
      './test/index.js',
    ],


    // list of files to exclude
    exclude: [
        
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // By default, Karma loads all sibling NPM modules which have a name starting with karma-*.
  })
}