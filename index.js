'use strict';

var Namefully = require('namefully').Namefully;

module.exports = function (name){
    var n = new Namefully('Ralph Florent');
	console.log('Hello, ' + (name || n.fn()) + '!');
	console.log('Welcome to the JS world!');
}