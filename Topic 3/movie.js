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