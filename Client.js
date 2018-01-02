var net = require('net') ;
var client = net.connect({
    port: 9000
},function(){ // connect监听器
  console.log("客户端已连接") ;
  client.write('Hello,Baby !\r\n') ;
});
client.on("data", function(data) {
  console.log(data.toString()) ;
  client.end() ;
});
client.on("end", function(){
  console.log("客户端断开连接") ;
}) ;