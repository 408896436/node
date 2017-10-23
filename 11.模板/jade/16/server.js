const jade = require('jade');

var str = jade.renderFile('./16.jade', {pretty:true, 
	arr : ['apple', 'banana', 'pear']
});

console.log(str);

/*
	for循环 --- ！注意缩进问题
*/