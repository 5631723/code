
//不断切换显示的图形
//擦除重绘
// 
var fps=6;
// 当前帧
var index=0;
//每一帧
var frames=[];
//文件流API
var fs=require('fs');

for(var i=1;i<=3;i++)
{
    frames[frames.length]=fs.readFileSync(`frames/${i}.txt`,'utf8');

}

var render = ()=>{

    //将当前控制台清空
    process.stdout.write('\033[2J');
    process.stdout.write('\033[0f');
    //输出新的内容
    process.stdout.write(frames[index++]);

    if(index==3)
    index=0;

};

setInterval(render,1000/fps);