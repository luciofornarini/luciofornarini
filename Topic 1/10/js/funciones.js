    $(document).ready(function(){

    	setTimeout(function(){
			$(".fade").fadeIn(500);	
			},300);

       $("#button").click(function(){
          var nombre = $(".alias").val();
          $("#saludo").html('Welcome ' + nombre);
       }); 
    }); 


// $.ajax({
// 	url:'http://bootcamp.aws.af.cm/welcome/' + $(".alias").val(),
// 	type: 'GET',
// 	dataType: 'json',
// 	succes: function(saludo){
// 		$("#saludo1").html();
// 	}
// })