const express = require('express');
const cookieParser = require('cookie-parser');	
const cookieSession = require('cookie-session');

var server = express();

server.use(cookieParser());
server.use(cookieSession({
	name : 'lcf',					//name
	keys : ['aaa','bbbb','ccc'],	//加密字符串数组，字符越长、数组内容越多，越安全
	maxAge : 2*3600*100		//失效时间，失效时间越短越安全
}));

server.use('/', function(req, res){	
	if (req.session['count'] == null) {
		req.session['count'] = 1;
	}else{
		req.session['count']++;
	}
	console.log(req.session['count']);
	res.send('ok');
});

server.listen(8000);

console.log('running');