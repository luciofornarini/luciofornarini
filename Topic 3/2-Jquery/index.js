
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

