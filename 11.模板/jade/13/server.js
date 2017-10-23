const jade = require('jade');

var str = jade.renderFile('./13.jade', {pretty:true, 
	json :{ width : 'l00px', height : '50px' },
	arr : ['love', 'game']
});

console.log(str);

/*
	json/数组传递给jade文件进行style、class (style、class不需要花括号)
*/