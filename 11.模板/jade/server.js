const jade = require('jade');

var str = jade.renderFile('./views/15.jade', {pretty:true});

console.log(str);

/*
	01.根据缩进，规定层级
	02.属性放在()里面，逗号分隔
	03.标签加内容 a(href='http://www.baidu.com') 百度一下	
	04.加内链属性的两种方法/加类名的两种方法(只有style、class能用json格式)
	05.标签加id、类名的简写方式
	06.普通属性用json
	07.自定义标签(都是双标签)
	08.|线输出原样内容
	09.使用.原样输出 （.里面的内容都原样输出，不做任何转义）
	10.include引入js文件
	15.直接在jade进行js操作
*/