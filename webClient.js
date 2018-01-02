// var http = require('http')

// var options = {
//     host:'172.0.0.1',
//     port:'8080',
//     path:'/index.html'
// }

// function callback(){
//     var body = '';
//     response.on('data',function(chunk){
//         body += chunk;
//     });
//     response.on('end',function(){
//         console.log(body)
//     })

// }
// //向服务端发起请求
// var req = http.request(options,callback);
// req.end();
var http = require('http');

// 用于请求的选项
var options = {
  host: 'localhost',
  port: '8088',
  path: '/index.html'  
};

// 处理响应的回调函数
var callback = function(response){
  // 不断更新数据
  var body = '';
  response.on('data', function(data) {
     body += data;
  });
  
  response.on('end', function() {
     // 数据接收完成
     console.log(body);
  });
}
// 向服务端发送请求
var req = http.request(options, callback);
req.end();