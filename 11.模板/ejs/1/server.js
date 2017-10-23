const ejs = require('ejs');

ejs.renderFile('./view/1.ejs', {
	name : 'lcf', 
	arr : ['apple', 'egg', 'pear'],
	json : {
		name : 'lcf',
		age : 27
	}
},function(err,data){
	console.log(data);
});

/*
	输出变量
	ejs简介
	1、脚本需要用 <%  %> 括起来
	2、输出变量的时候需要用 = ，如 <%= name %>
	3、= 代表转义输出， - 代表原样输出
*/