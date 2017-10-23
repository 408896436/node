const jade = require('jade');

var str = jade.renderFile('./18.jade', {pretty:true});

console.log(str);

/*
	控制语句 (var前面有-， 后面的js就不需要再用-)
*/