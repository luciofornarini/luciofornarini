var http = require('http');

var server = http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end('<h1>holaa</h1>');
});

//var port = Number(process.en.PORT  3030);

server.listen(3030);