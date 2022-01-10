function a() {}
var a = function() {}
a = {
    b : function() {} //b는 변수 역할도 한다고 볼 수 있다. 객체안에서 변수 역할은 속성(property), 함수를 method라고 부른다
}

function cal(func, num) {
    return func(num);
}
function increase(num) {
    return num + 1;
}
function decrease(num) {
    return num - 1;
}
console.log(cal(increase,1));
console.log(cal(decrease,1));


function cal2(mode) {
    var funcs = {
        'plus' : function(left, right) {return left + right},
        'minus' : function(left, right) {return left - right}
    }
    return funcs[mode];
}
console.log(cal2('plus')(2,1));
console.log(cal2('minus')(2,1));


var process = [
    function(input) {return input + 10;},
    function(input) {return input * input;},
    function(input) {return input / 2;}
];
var input = 1;
for (var i = 0; i < process.length; i++) {
    input = process[i](input);
}
console.log(input);