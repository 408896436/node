const express = require('express');

var server = express();
server.listen(8081);

/*
	/news/news.html			(news路由)		
*/
var news = express.Router();
server.use('/news', news);
news.get('/news.html', function(req,res){
	res.send('你访问的页面是：新闻页');
});

/*
	/news/post/post.html      (news下面的子路由)
*/
var post = express.Router();
news.use('/post', post)
post.get('/post.html', function(req,res){
	res.send('你访问的页面是 ：新闻推送页');
});

console.log('server is running...');


/*
	当用户访问的地址是 http://www.xxx.com/news/news.html的时候，就执行 :
	news.get('/news.html', function(req,res){
		res.send('你访问的页面是：新闻页');
	});

	当用户访问的地址是 http://www.xxx.com/news/post/post.html的时候，就执行:
	post.get('/post.html', function(req,res){
		res.send('你访问的页面是 ：新闻推送页');
	}); 
*/