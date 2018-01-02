// var net = require('net')

// var chatServer = net.createServer()
// chatServer.on('connection',function(c){
//     c.write('hi!\n');  // 服务端向客户端输出信息，使用 write() 方法
//     c.write('bye!\n');
//     c.end();       
// });

// chatServer.listen(9000);
// 在前者的基础上，实现 Client --> Sever 的通讯，如此一来便是双向通讯
var net = require('net');
var chatServer = net.createServer(),    
    clientList = [];
chatServer.on('connection', function(client) {
  // JS 可以为对象自由添加属性。这里我们添加一个 name 的自定义属性，用于表示哪个客户端（客户端的地址+端口为依据）
  client.name = client.remoteAddress + ':' + client.remotePort;  
  client.write('Hi ' + client.name + '!\n');  
  clientList.push(client);  
  client.on('data', function(data) {    
     broadcast(data, client);// 接受来自客户端的信息  
  });
});
function broadcast(message, client) {  
    for(var i=0;i<clientList.length;i+=1) {    
      if(client !== clientList[i]) {      
        clientList[i].write(client.name + " says " + message);    
      }  
    }
}
chatServer.listen(9000);
