(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Director(nombre){
	this.attributes = {
			nombre: nombre ,
			quotes: []		
		};
};

	Director.prototype.set = function(attr, value){
				this.attributes[attr] = value;
			};

	Director.prototype.get = function(attr){

		return this.attributes[attr];	
		};

	Director.prototype.speak = function(){

			console.log(this.attributes.nombre + ' says ' + this.attributes.quotes);	
		};


module.exports = Director;
},{}],2:[function(require,module,exports){

//var jQuery = require('./jquery-1.11.2.min.js');
var Movie = require('./movie.js');
var Director = require('./director.js');


var alien = new Movie();
var ridleyScott = new Director('Ridley Scott');
ridleyScott.set('quotes', [' Cast is everything', ' Do what ...']);
alien.set('director', ridleyScott);
alien.get('director').speak();


//browserify index.js -o movies.js

function imprimirEnPantalla(){

	$('#div').html(' says ');
	//$('#div').html(this.attributes.nombre + ' says ' + this.attributes.quotes);
	

};


$(document).ready(function(){
	
	imprimirEnPantalla();
});


},{"./director.js":1,"./movie.js":3}],3:[function(require,module,exports){
var Director = require('./director.js')

function Movie(){
	this.attributes = {
		titulo: '',
		fecha: ''		
	};
};


//http://spinejs.com/docs/commonjs

	Movie.prototype.set = function(attr, value){
				this.attributes[attr] = value;
		};

	Movie.prototype.get = function(attr){

		return this.attributes[attr];	
		};

module.exports = Movie;
},{"./director.js":1}]},{},[2]);
