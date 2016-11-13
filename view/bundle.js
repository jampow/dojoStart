(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var st =  function() {
    return {
    	getNumber: function(value){
		return value.split('').map( this.start ).join('');
    	},
        start: function(value) {
        	if( typeof value == 'string' ){
        		value  = value.toUpperCase();
        	}

        	switch(value) {
			case 'A': case 'B': case 'C':
				return 2;
			case 'D': case 'E': case 'F':
				return 3;
			case 'G': case 'H': case 'I':
				return 4;
			case 'J': case 'K': case 'L':
				return 5;
			case 'M': case 'N': case 'O':
				return 6;
			case 'P': case 'Q': case 'R': case 'S':
				return 7;
			case 'T': case 'U': case 'V':
				return 8;
			case 'W': case 'X': case 'Y': case 'Z':
				return 9;
			default:
				return value;
		}
	}
    };
};

module.exports = new st();

},{}],2:[function(require,module,exports){
var conv = require('../../lib/exercicio.js');

window.convertNumber = function() {
	var phone = document.getElementById('phone').value;
	var convertedNumber = conv.getNumber(phone);
	document.getElementById('result').innerText = convertedNumber;
}

},{"../../lib/exercicio.js":1}]},{},[2]);
