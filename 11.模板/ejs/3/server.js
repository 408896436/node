const ejs = require('ejs');

ejs.renderFile('./view/1.ejs', {},function(err,data){
	console.log(data);
});

/*
	！注意，include 不能用变量去定义
*/