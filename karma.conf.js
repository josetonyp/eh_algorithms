module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'bower_components/pouchdb/dist/pouchdb.min.js',
      'bower_components/lodash/dist/lodash.min.js',
      'bower_components/angular-pouchdb/angular-pouchdb.min.js',
      'app/todo/**/*.js',
      'spec/app/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ]
  });
};
