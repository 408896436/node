const jade = require('jade');

var str = jade.renderFile('./12.jade', {pretty:true, a : 5, b : 4});

console.log(str);

/*
	变量传递给jade文件进行运算	
*/