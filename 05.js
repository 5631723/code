'use strict' //启用严格模式

const http=require('http');
let count=0;
const server=http.createServer((request,response)=>{
    response.write(`你是第${count++}个用户`);
    //一个阻塞操作，会影响所有用户的访问，node是单线程操作
    if(count==10)
    while(true){}
    response.end();
});

server.listen(2080,(err)=>{
    if(err)
    throw err;
    console.log('成功启动web服务，端口：2080');
});