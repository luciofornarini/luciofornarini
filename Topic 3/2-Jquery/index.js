

var Movie = require('./movie.js');
var Director = require('./director.js');
var $ = require('./jquery-1.11.2.min.js');

var alien = new Movie();
var ridleyScott = new Director('Ridley Scott');
ridleyScott.set('quotes', [' Cast is everything', ' Do what ...']);
alien.set('director', ridleyScott);
alien.get('director').speak();

//browserify index.js -o movies.js

function imprimirEnPantalla(){

	$('#div').html( ridleyScott.get('nombre') + ' says ' + ridleyScott.get('quotes'));
};

$(window).load(function(){
	imprimirEnPantalla();
});

// $(document).ready(function(){
// 	imprimirEnPantalla();
// });

