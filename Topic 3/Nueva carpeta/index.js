
var Movie = require('./movie.js')
var Director = require('./director.js')

var alien = new Movie();
var ridleyScott = new Director('Ridley Scott');
ridleyScott.set('quotes', ['Cast is everything.', 'Do what ...']);
alien.set('director', ridleyScott);
alien.get('director').speak();


//browserify -r ./index.js:Movie -o movies.js