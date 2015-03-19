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
		genero: ''
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
		}
		// events: {
		// 	'click .delete': 	'delete',
		// 	'click .edit': 		'edit',
		// 	'click .new': 		'new'
		// },	
		// delete: function (){
		// 	 var movie = movieCollection.get(id);
		//   	 movie.destroy();
		//   	 movieCollection.remove();
		// },
		// edit: function(){

		// },
		// new: function(){
			
		// }
		

	});

	App.Views.AddMovie = Backbone.View.extend({
		el: '#content',
		render: function(){
			var fuente = $('#add-movie').html();
			var plantilla = Handlebars.compile(fuente);
			var html = plantilla();
			this.$el.html(html);
		}
		// events: {
		// 	'click .saveNew' : 'save'
		// },	
		// save: function(){
		// .-object( .-values)	
		// }
		//this.model.save();

	});

	App.Views.EditMovie = Backbone.View.extend({
		el: '#content',
		render: function(){
			var fuente = $('#edit-movie').html();
			var plantilla = Handlebars.compile(fuente);
			var html = plantilla(this.model.toJSON());
			this.$el.html(html);
		}
		// events: {
		// 	'click .saveEdit' : 'update'
		// },	
		// update: function(){
		// .-object( .-values)		
		// }

	});

	movieCollection = new App.Collections.Movies([
			{
				id: 1, 
				title: 'Redirected', 
				year: 2014, 
				description: 'Cuatro policías corruptos y cerveza barata.', 
				genero: 'Comedia, Suspenso'
			}
		]);


	App.Router.AppRouter = Backbone.Router.extend({
		//el: '#content',
		routes:{
			'' : 'index',
		},
		index: function(){
			var moviesView = new App.Views.Movies({collection: movieCollection});
			moviesView.render();
		}

	});
	new App.Router.AppRouter();
	Backbone.history.start();

	
});



//.-object .-values