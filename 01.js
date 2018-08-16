
//不断切换显示的图形
//擦除重绘
// 
var fps=6;
// 当前帧
var index=0;
//每一帧
var frames=[];

frames[frames.length]=`

(T＿T)
`;

frames[frames.length]=`

(Ｔ▽Ｔ)
`;
frames[frames.length]=`

(ㄒoㄒ) 
`;

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