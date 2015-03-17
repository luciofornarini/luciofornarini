$(function(){

	 $('#nueva').click(function addvisible(){
	    $('#add-movie').show(); 
	    $('#nueva').hide();
	    $('#guardarnueva').show();

	  });

	  $('#guardarnueva').click(function visible(){
	    $('#add-edit-movie').hide(); 
	    $('#nueva').show();
	    $('#guardarnueva').hide();    
	  });

	  $('#editar').click(function(){
	  	$('#year').show();
	  	$('#title').show();
	  	$('#description').show();
	  	$('#genero').show();
	  })

	var Movie = Backbone.Model.extend({
	  default:{
	      title: '',
	      year: '',
	      description: '',
	      genero: ''
	  }
	});

	var Movies = Backbone.Collection.extend({
		model: Movie,
		LocalStorage: new Backbone.LocalStorage("allmovies")
	});

	var MovieView = Backbone.View.extend({
	  el: '#content',
	  render: function(){
	    var source = $('#template-list').html();
	    var template = Handlebars.compile(source);
	    var html = template(this.model.toJSON());
	    this.$el.html(html);
	  }
	});


	var MoviesView = Backbone.View.extend({
		el: '#content',
		render: function(){
			var fuente = $('#template-list').html();
			var plantilla = Handlebars.compile(fuente);
			var html = plantilla(this.collection.toJSON());
			this.$el.html(html);
		}

	});


	var peli1 = new Movie({title: 'Redirected', year: '2014', description: 'Cuatro amigos ingleses que se dedican a robar se quedan tirados en Lituania. Para volver a casa tropiezan con graves dificultades: las diferencias culturales, el trato con criminales, prostitutas, policías corruptos y cerveza barata.', genero: 'Comedia, Suspenso'});

	var lista = new Movies([peli1]);

	var AppRouter = Backbone.Router.extend({
		routes:{
			'' : 'index',
		},
		index: function(){
			var moviesView = new MoviesView({collection: lista});
			moviesView.render();
		}

	});
	new AppRouter();
	Backbone.history.start();
});