const express = require('express');
const consolidate = require('consolidate');

var server = express();
server.listen(8000);
console.log('Server is running...');

//1、规定输出什么东西 
server.set('view engine', 'html');
//2、设置模板文件所在目录
server.set('views', './views');
//3、用哪种模板引擎
server.engine('html', consolidate.ejs);
/*
	3句话总结
	用ejs来输出html文件

	！注意
	使用了express后，为了使用模板引擎方便，我们会引入consolidate，这个中间件虽然支持ejs jade等很多模板引擎，但是在node服务器搭建时，即使安装了consolidate，也要安装所使用的模板引擎 
	cnpm install ejs就可以解决
*/
server.get('/index', function(req, res){
	res.render('1.ejs', {name : 'lcf'});
});

