const express = require('express');
const cookieParser = require('cookie-parser');

var server = express();

server.use(cookieParser('abcdefg'));

server.use('/', function(req, res){

//req.secret = 'abcdefg'; ????

	res.cookie('name', 'tom', {path:'/', maxAge : 100000, signed:true});


	console.log( '签名cookie ：', req.signedCookies );


	res.send('ok');
});

server.listen(8000);

console.log('running');