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
			console.log(this.attributes['titulo'] + this.attributes['fecha']);	
		}
module.exports = Movie();