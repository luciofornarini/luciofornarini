(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

function Director(){
        this.attributes = {
                        nombre: '',
                        quotes: []
                };
};

        Director.prototype.set = function(attr, value){
                                this.attributes[attr] = value;
                        }

        Director.prototype.get = function(){
                        console.log(this.attributes['nombre'] + this.attributes[
'quotes']);
                }


        Director.prototype.speak = function(){
                        console.log(this.attributes['nombre'] + this.attributes[
'quotes']);
                }

module.exports = Director;
},{}],2:[function(require,module,exports){
function Movie(){
        this.attributes = {
                titulo: '',
                fecha: ''
        };
};



var Director = require('./director.js')

//http://spinejs.com/docs/commonjs

        Movie.prototype.set = function(attr, value){
                                this.attributes[attr] = value;
                }

        Movie.prototype.get = function(){
                        console.log(this.attributes['titulo'] + this.attributes[
'fecha']);
                }
module.exports = Movie;
},{"./director.js":1}],3:[function(require,module,exports){
function Movie(){
        this.attributes = {
                titulo: '',
                fecha: ''
        };
};



var Director = require('./director.js')

//http://spinejs.com/docs/commonjs

        Movie.prototype.set = function(attr, value){
                                this.attributes[attr] = value;
                }

        Movie.prototype.get = function(){
                        console.log(this.attributes['titulo'] + this.attributes[
'fecha']);
                }
module.exports = Movie;


function Director(nombre){
        this.attributes = {
                        nombre: '',
                        quotes: []
                };
};

        Director.prototype.set = function(attr, value){
                                this.attributes[attr] = value;
                        }
       

        Director.prototype.speak = function(){
                        console.log(this.attributes.nombre + this.attributes.quotes);   
                }

var director = require('./director.js');

module.exports = Director;



var Movie = require('./movie.js')
var Director = require('./director.js')

var alien = new Movie();
var ridleyScott = new Director('Ridley Scott');
ridleyScott.set('quotes', ['Cast is everything.', 'Do what ...']);
alien.set('director', ridleyScott);
alien.get('director').speak();
},{"./director.js":1,"./movie.js":2}]},{},[3]);