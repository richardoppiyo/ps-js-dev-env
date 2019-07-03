//This file isn't transpiled , so must use common js or ES5

//Register babel to transpile before our test runs
require('babel-register')();

//Disable webpack features that Mocha doesnt understand
require.extensions['.css'] = function() {};
