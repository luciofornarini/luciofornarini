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

			console.log(this.get('nombre') + ' says ' + this.get('quotes'));	
		};



module.exports = Director;