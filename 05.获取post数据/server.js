var http = require('http');
var querystring = require('querystring');	//解析user=xxxx&password=xxxx&age=xxx，将返回一个json对象

var server = http.createServer(function(req,res){

	if (req.url === '/favicon.ico') {return;}

	var str = '';
	var i = 0;	//验证POST是分段式发送数据(发送的数据必须要够大，才会分段式加载)
	req.on('data', function(data){

		console.log('第'+(++i)+'数据');
		str+=data;
	});

	req.on('end', function(){
		console.log(querystring.parse(str));	
	})

	res.end();
});

server.listen(8080);


/*
	POST发送数据最多能发送1G的内容，因为太大，所以POST发送数据是分段式（把数据切成一段一段）发送的。（比如QQ发了一个3G的文件，若此时发送了99%，然后断网了。只会丢失一部分数据，之前发送的99的数据都不会丢失。所以不用从头发送）
	所以node接受POST数据的时候，需要用一个data事件，当有POST数据发送过来的时候，这个事件就回去调用回调函数，回调函数返回的data就是当前获取到的一部分数据。
	除此之外，还需要注册一个end事件，当POST数据完全发送完毕后，改事件会执行。

*/

