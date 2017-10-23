const express = require('express');
const multer = require('multer');
const fs = require('fs');
const pathLib = require('path');

var server = express();

server.listen('8080');

var objMulter = multer({
	dest : './www/upload'
});
// server.use(objMulter.single('file'));
server.use(objMulter.any());

server.post('/', function(req, res){  //这里不能是./ ??
	
	//www\upload\8382928cbe766013319beb0b00fc720b + '.png'

	var newName = req.files[0].path + pathLib.parse(req.files[0].originalname).ext;

	fs.rename( req.files[0].path, newName, function(err){

		if (err) {
			res.send('上传失败');
		}else{
			res.send('上传成功');
		}

	});

});

server.use(express.static('./www'));	

console.log( 'server is running...' );