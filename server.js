var http= require ("http");

http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type":"text/html"});
	response.write("hola mundo");
	response.end();
}).listen(1969);