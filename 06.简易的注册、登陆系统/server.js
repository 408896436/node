var http = require('http');
var fs = require('fs');
var urlManager = require('url');

const userList = {}; //{tom : 123456}

http.createServer(function(req, res){

	if (req.url === '/favicon.ico') {return;}

	var url = urlManager.parse(req.url, true);
	const pathName = url.pathname;
	const GET = url.query;

	//请求接口
	if (pathName == '/user') 
	{
		switch(GET.act)
		{	
			//注册
			case 'zhuce':
				//1、查看这个账号是否注册过
				if (userList[GET.user]) 
				{
					res.write('{ok : false, msg : "此用户已存在!"}');
				}
				else
				{
					userList[GET.user] = GET.pass;
					res.write('{ok : true, msg : "注册成功！"}');
				}
			break;

			//登陆
			case 'denlun':
				//判断用户是否存在
				if (!userList[GET.user]) 
				{
					res.write('{ok : false, msg : "此用户不存在!"}');
				}
				//判断用户密码是否正确
				else if(userList[GET.user] != GET.pass)
				{
					res.write('{ok : false, msg : "账号或密码错误！"}');
				}
				else
				{
					res.write('{ok : true, msg : "登陆成功!"}');
				}
			break;

			default :
				res.write('{ok : false, msg : "请求的act找不到！"}')
		}

		res.end();
	}
	//请求文件
	else
	{
		fs.readFile('./www' + pathName, function(err, data){

			if (err) {
				res.write('404');
			}else{
				res.write(data);
			}
			res.end();
		});
	}

	

}).listen(8080);



