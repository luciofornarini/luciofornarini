$(document).ready(function(){

		var fuente = $('#template').html();
		var plantilla = Handlebars.compile(fuente);
		
		//var datos = {usuario : ' Lucio Fornarini'};

		var Movie = [
			{
			name: 'Mr. Holmes',
			year: '2015',
			description: 'Buena',
			genero: 'Drama'
			},
			{
			name: 'The Night Shift',
			year: '2015',
			description: 'Muy Buena',
			genero: 'Drama'
			},
			{
			name: 'The Following',
			year: '2012',
			description: 'Buena',
			genero: 'Drama'
			},
			{
			name: 'Shameless',
			year: '2010',
			description: 'Regular',
			genero: 'Drama'
			
			}
		];

		var html = plantilla(Movie);

		$('#content').html(html);


});

	