		function album(){
			$.ajax({
				      url: 'https://api.spotify.com/v1/search',
				      data: {
				      		q: $("#text").val(),
							type:'album',
				        	
				      },
				    	type: 'GET',
				     	dataType: 'json',

				      success: function(data) {
				      	console.log(data.albums.items);
				    

				            $.each(data.albums.items, function(index, album)
							{
							$('#info')
								.append("<div class='name'>Album:" + album.name + "</div>" + 

										"<div class='type'>Tipo:" + album.type + "</div>" + 

										"<img src=" + album.images[1].url + ">" +
										
										"<a href=" + album.uri + ">Link</div>"

										);
							});
							      },
				      
				        error: function() {
				         $('#info').html('<p>Error</p>');
				      },
				   });
				
		}
	
		$(function(){
			$('#action-button').click(function() {
						album();   
			});
		});