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
			console.log(this.attributes['nombre'] + this.attributes['quotes']);	
		}

	Director.prototype.speak = function(){
		console.log(this.attributes['quotes']);
	}