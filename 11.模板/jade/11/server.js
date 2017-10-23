const jade = require('jade');

var str = jade.renderFile('./11.jade', {pretty:true, name: '林春逢'});

console.log(str);

/*
	变量传递给jade文件	
*/