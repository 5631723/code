//计算器 node 1 + 2
//模块化计算器(模块化访问出现问题)

// 1、接收参数
const args = process.argv.slice(2); // ['node 执行程序所在路径','当前脚本所在路径',参数......]

// 2、分析参数
if(args.length!=3){
    console.log('参数不合法');
    throw new Error('参数不合法');
    //此处不是方法，不能写return
}

let parameter1 = args[0];
let operator = args[1];
let parameter2 = args[2];

//载入模块
const cals=require('./module/calculator.js');

// 3、运行
//let result=eval(`${parameter1} ${operator} ${parameter2}`);
let result;
switch (operator) {
    case '+':
        cals.add(parameter1,parameter2);
        break;
        case '-':
        cals.sub(parameter1,parameter2);
        break;
        case '*':
        case 'x':
        cals.mut(parameter1,parameter2);
        break;
        case '/':
        case '÷':
        cals.div(parameter1,parameter2);
        break;

    default:
    throw new Error('错误的运算符');
        break;
}

console.log(result);
