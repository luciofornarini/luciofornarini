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

module.exports = Director;