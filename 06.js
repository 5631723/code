//计算器 node 1 + 2
//模块化计算器

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

// 3、运行
//let result=eval(`${parameter1} ${operator} ${parameter2}`);
let result;
switch (operator) {
    case '+':
        result=parseFloat(parameter1)+parseFloat(parameter2);
        break;
        case '-':
        result=parseFloat(parameter1)-parseFloat(parameter2);
        break;
        case '*':
        case 'x':
        result=parseFloat(parameter1)*parseFloat(parameter2);
        break;
        case '/':
        case '÷':
        result=parseFloat(parameter1)/parseFloat(parameter2);
        break;

    default:
    throw new Error('错误的运算符');
        break;
}

console.log(result);
