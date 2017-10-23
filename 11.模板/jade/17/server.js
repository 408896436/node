const jade = require('jade');

var str = jade.renderFile('./17.jade', {pretty:true, 
	title : '<h2>game</h2>'
});

console.log(str);

/*
	非转义输出html
*/