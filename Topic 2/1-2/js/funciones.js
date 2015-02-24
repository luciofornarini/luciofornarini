$(document).ready(function(){

	function Movie(hashmap, titulo){

		this.titulo = titulo;
		this.hashmap = hashmap;
	}
	
	var movieObj = new Movie("1", "Diamante");
	//var movieObj = new Movie("2", "Crimen")


		Movie.prototype.play = function(){

			"Playing " + movieObj.titulo + "...";
		};

		Movie.prototype.stop = function(){
			"Stop..." + movieObj.titulo
		};

		Movie.prototype.set = function(attr, value){
			//$(this).attr = value;
				
		} 

		Movie.prototype.get = function(attr){

		}
		
		
		

		

		console.log(movieObj);
	// var terminator = new Movie();
	// 	terminator.set(titulo, 'terminator');
	//  	terminator.play();

	//  	console.log(terminator);	

});

		
		

