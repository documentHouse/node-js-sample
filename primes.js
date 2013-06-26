#!/usr/bin/env node
var fs = require('fs');
console.log("Just writing to the console");

var isPrime = function() {

    var primeCache = [2];

    var primeTestFunc = function(num) {
	return true;
    }

    return primeTestFunc;

}();

if (isPrime(2)) {
    console.log("We have a prime ");
}
else {
    console.log("Just writing to the console");
}
