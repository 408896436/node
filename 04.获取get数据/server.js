var http = require('http');
var urlManager = require('url');

var server = http.createServer(function(req,res){

	if (req.url === '/favicon.ico') {return;}

	var msg = urlManager.parse(req.url, true);

	console.log(msg.query);	//获取用户登陆账号和密码
	console.log(msg.pathname);	//请求的页面

	res.end();
});

server.listen(8080);

/*
	注意！GET发送数据只能发送32KB

	 url对象可以获取地址栏的很多信息。如获取?后面的内容。 http://www.baidu.com?user=tom&password=hz8500566
	 
	 url对象还能获取下面这些数据 :
		
	 protocol: null,
	 slashes: null,
	 auth: null,
	 host: null,
	 port: null,
	 hostname: null,
	 hash: null,
	 search: '?user=fsdfsdf&password=bvcbvbcbcv',
	 query: { user: 'fsdfsdf', password: 'bvcbvbcbcv' },
	 pathname: '/index.html',
	 path: '/index.html?user=fsdfsdf&password=bvcbvbcbcv',
	 href: '/index.html?user=fsdfsdf&password=bvcbvbcbcv' }
*/