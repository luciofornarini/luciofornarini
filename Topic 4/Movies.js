$(function(){

window.App ={
	Models: {},
	Collections: {},
	Views: {},
	Router: {}
}; 

	App.Models.Movie = Backbone.Model.extend({
	  default:{
	  	id: '',		
		title: '',
		year: '',
		description: '',
		genre: ''
	  }
	});

	App.Collections.Movies = Backbone.Collection.extend({
		model: App.Models.Movie,
		LocalStorage: new Backbone.LocalStorage("allmovies")
	});

	App.Views.Movie = Backbone.View.extend({
	  el: '#content',
	  render: function(){
	    var source = $('#template-list').html();
	    var template = Handlebars.compile(source);
	    var html = template(this.model.toJSON());
	    this.$el.html(html);
	  }
	});

	App.Views.Movies = Backbone.View.extend({
		el: '#content',
		render: function(){
			var fuente = $('#template-list').html();
			var plantilla = Handlebars.compile(fuente);
			var html = plantilla(this.collection.toJSON());
			this.$el.html(html);
		},

		events:{
			'click .delete': 	'delete',
			'click .edit': 		'edit',
			'click .new': 		'add'
		},
		delete: function(id){
			
			var id = movieCollection.get[id];
			alert(id);

			// var model = this.movieCollection.get(id);
			// model.destroy();
			// movieCollection.remove(model);
		},
		edit: function(id){
			var edit = new App.Views.EditMovie();
			edit.render();

			//var editid = this.movieCollection.get(id);
			
			//console.log(editid);
		},
		add: function(){
			var add = new App.Views.AddMovie();
			add.render();
		}


	});

	App.Views.AddMovie = Backbone.View.extend({
		el: '#content',
		render: function(){
			var fuente = $('#add-movie').html();
			var plantilla = Handlebars.compile(fuente);
			var html = plantilla();
			this.$el.html(html);
		},

	 	events:{
	 		'click .saveNew' : 'save'
	 	},	
	 	save: function(){
	 	var movie = new App.Models.Movie({
	 	//		_.object(App.Models.Movie, _.values());		
	 	});

		movieCollection.add(movie)
		movie.save();
		console.log(movie);	
	 	}	
	 	
	});

	App.Views.EditMovie = Backbone.View.extend({
		el: '#content',
		render: function(){
			var fuente = $('#edit-movie').html();
			var plantilla = Handlebars.compile(fuente);
			var html = plantilla();
			this.$el.html(html);
		},
		// initialize: function(){
		// 	var movie = movieCollection.get(id);
		// 	console.log(movie);
		// }
		// events: {
		// 	'click .update' : 'update'
		// },	
		// update: function(){
		// 		this.model.set({
		// 		_.object(App.Models.Movie, _.values());	
		// })	
		// 
		// this.model.save();		
		// }

	});

	var movieCollection = new App.Collections.Movies([
			{
				id: 1, 
				title: 'Redirected', 
				year: 2014, 
				description: 'Cuatro policias corruptos y cerveza barata.', 
				genre: 'Comedia, Suspenso'
			},
			{
				id: 2, 
				title: 'Cinderella', 
				year: 2015, 
				description: 'When her father unexpectedly passes away.', 
				genre: 'Ciencia ficcion'
			}
		]);


	App.Router.Route = Backbone.Router.extend({
		//el: '#content',
		routes:{
			'' : 'index',
		},
		index: function(){
			var moviesView = new App.Views.Movies({collection: movieCollection});
			moviesView.render();
		}

	});
	new App.Router.Route();
	Backbone.history.start();

	
});



//el edit no me reconoce los valeros del value
//el delete, edit, no reconocen el id
//el add no crea una nueva movie