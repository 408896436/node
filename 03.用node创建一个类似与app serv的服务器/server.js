var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){

	if (req.url === '/favicon.ico') {return;}

	fs.readFile('./www' + req.url, function(err, data){

		if (err) {
			res.write('404');
		}else{
			res.write(data);
		}
		res.end();
	});
	
});

server.listen(8080);