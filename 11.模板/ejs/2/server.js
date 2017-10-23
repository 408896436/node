const ejs = require('ejs');

ejs.renderFile('./view/1.ejs', {},function(err,data){
	console.log(data);
});

/*
	输出html
*/