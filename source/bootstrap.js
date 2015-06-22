'use strict';

var System = require('es6-module-loader').System;

System.import('./index').then(function (index) {
  index.run(__dirname);
})
.catch(function(error) {
  console.log('An error occurred during ES6 bootstrap: ' + error.stack);
});
