//CMD 的规范中要设置 define
//在NODE中实现的是CommonJS规范，不需要设置
// define(function (require, module, exports) {

    function convert(input) {
        return parseFloat(input);
    }

    function add(a, b) {
        return convert(a) + convert(b);
    }
    function sub(a, b) {
        return convert(a) - convert(b);
    }
    function mut(a, b) {
        return convert(a) * convert(b);
    }
    function div(a, b) {
        return convert(a) / convert(b);
    }

    // exports.add=add;
    // exports.sub=sub;

    //自动化属性es6语法
    module.exports = { add, sub, mut, div };

// });