//OBSERVER LIST
function ObserverList(){
			  this.observerList = [];
			}

//PROTOTYPES OBSERVER
			ObserverList.prototype.add = function( obj ){
			  return this.observerList.push( obj );
			};
			 
			ObserverList.prototype.count = function(){
			  return this.observerList.length;
			};
			 
			ObserverList.prototype.get = function( index ){
			  if( index > -1 && index < this.observerList.length ){
			    return this.observerList[ index ];
			  }
			};
			 
			ObserverList.prototype.indexOf = function( obj, startIndex ){
			  var i = startIndex;
			 
			  while( i < this.observerList.length ){
			    if( this.observerList[i] === obj ){
			      return i;
			    }
			    i++;
			  }
			 
			  return -1;
			};


//MOVIE
function Movie(){
	this.attributes = {
		titulo: '',
		fecha: ''		
	};
};



//PROTOTYPES MOVIE
	Movie.prototype.play = function(){
			console.log("Playing " + this.attributes['titulo'] + "...");
		};

	Movie.prototype.stop = function(){
			console.log("Stopped" );
		};

	Movie.prototype.set = function(attr, value){
			this.attributes[attr] = value;
		}; 

	Movie.prototype.get = function(attr){

		return this.attributes[attr];	
		};


//SUBJECT OBSERVER
function Subject(){
			  this.observers = new ObserverList();
			}
			 
			Subject.prototype.addObserver = function( observer ){
			  this.observers.add( observer );
			};
			 
			Subject.prototype.removeObserver = function( observer ){
			  this.observers.removeAt( this.observers.indexOf( observer, 0 ) );
			};
			 
			Subject.prototype.notify = function( context ){
			  var observerCount = this.observers.count();
			  for(var i=0; i < observerCount; i++){
			    this.observers.get(i).update( context );
			  }
			};

// The Observer
			function Observer(){
			  this.update = function(){
			    // ...
			  };
			}

function DownloadMovie(){
}

DownloadMovie.prototype = new Movie();

// // Extend an object with an extension
// function extend( Movie, DownloadMovie ){
//   for ( var key in Movie ){
//     DownloadMovie[key] = Movie[key];
//   }
// }

DownloadMovie.prototype.Download = function(){
	 	console.log('Downloading.. ' + this.attributes['titulo']);
	//por que no reconoce titulo como un attribute de Movie1
}



//OTRA FUNCION EXTEND
function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination; 
}


//MIXIN (extend)
var socialMixin = {
	share: function(friendName){
		console.log('Sharing ' + this.attributes['titulo'] + ' with ' + friendName);

	},
	like: function(){

	}
}

extend(socialMixin, Movie.prototype);


function actorClass() {
	this.attributes= {
		nombre: ''
	}
};
actorClass.prototype.set = function(attr, value){
			this.attributes[attr] = value;
		}  

var actor1 = new actorClass;

actor1.set('nombre', 'Angelina');


var mov1 = new Movie();
var mov2 = new Movie();
var ext1 = new DownloadMovie();
//ext1.Download()

mov1.set('titulo', 'Diamante'); 
mov1.set('fecha', '2000');

//agrega un nuevo attributo
mov2.set('critica', 'buena');

mov2.set('fecha', '2010');
mov2.set('titulo', 'Batman');



//var observer = new Observer()
//var movieObserver = new observerList();
//movieObserver.add(observer);



//var terminator = new Movie();
//terminator.set = ('titulo', 'Terminator');
//terminator.get
//