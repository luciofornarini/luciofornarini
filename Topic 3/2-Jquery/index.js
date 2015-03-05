
var Movie = require('./movie.js')
var Director = require('./director.js')
var jquery = require('./jquery-1.11.2.min.js')

var alien = new Movie();
var ridleyScott = new Director('Ridley Scott');
ridleyScott.set('quotes', [' Cast is everything', ' Do what ...']);
alien.set('director', ridleyScott);
alien.get('director').speak();


//browserify ./index.js -o movies.js