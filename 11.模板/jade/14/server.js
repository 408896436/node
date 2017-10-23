const jade = require('jade');

var str = jade.renderFile('./14.jade', {pretty:true, 
	arr : ['love', 'game']
});

console.log(str);

/*
	某个标签给单独类名
*/