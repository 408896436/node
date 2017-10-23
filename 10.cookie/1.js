const express = require('express');
const cookieParser = require('cookie-parser');	//解析cookie用，类似border-parser

var server = express();

server.use(cookieParser());

server.use('/', function(req, res){	//执行2次？

	//发送cookie到客户端
	res.cookie('name', 'tom', {path:'/', maxAge : 100000});

	//获取cookie
	console.log( '未签名cookie ：', req.cookies );

	//??
	res.send('ok');
});

server.listen(8000);

console.log('running');