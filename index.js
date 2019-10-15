var express = require('express');
var app = express();
 
app.get('/hello', function(req, res){
   res.send("Hello world!");
});
app.post('/hello', function(req, res){
   res.send("Ban vua gui yeu cua bang phuong thuc POST toi dia chi /hello");
});
var router = require('./router');
// Lưu ý: userRouters và index.js phải ở cùng 1 thư mục
app.use('/user', router);
 
app.listen(3333);
console.log('The server is runing ...');
