// process.stdin.setEncoding('utf8');

//
// process.stdin.on('readable', () => {
//   const chunk = process.stdin.read();
//   if (chunk !== null) {
//     process.stdout.write(`data: ${chunk}`);
//   }
// });


var q='请输入用户名:';
var users={
    'admin':'123',
    'user1':'123',
    'user2':'321'
};

process.stdout.write(q);

//data事件，一旦有数据流入就触发(回车就触发)
process.stdin.on('data', (input)=>{
   
   // process.stdout.write(data);
   //输入内容时流类型，并且包含回车（换行符）,此处需要处理一下
   input=input.toString().trim();



});