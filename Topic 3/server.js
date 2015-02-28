

// var http = require('http');

// var server = http.createServer(function(request, response){
// 		response.writeHead(200, {'Content-Type': 'text/html'});
// 		response.write('Hola Mundo');
// 		response.end();
// }).listen(8888);



var http = require('http');

function onRequest(request, response){
	console.log('peticion recibida');
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write('Hola Mundo');
	response.end();
}

http.createServer(onRequest).listen(8888);	

console.log('Servidor Creado');