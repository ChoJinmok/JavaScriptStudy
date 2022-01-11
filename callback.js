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


var numbers = [20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
numbers.sort(); // .이 붙는다는 것은 객체라는 말이다
// JS는 배열을 만들면 배열객체를 만들어서 배열에 함께 넣어준다
// 배열객체에는 sort라는 메소드가 있다
// JS에서 기본적으로 제공하는 객체와 메소드를 내장객체, 빌트인객체, 내장메소드, 빌트인메소드라고 한다.
// 사용자가 직접 정의한 객체와 메소드는 사용자정의 객체, 사용자정의 메소드라고 한다.
console.log(numbers); // 순서가 이상함, 생활코딩 JS사전 보기

var sortfunc = function(a, b) {
    console.log('a : '+a+', b : ' +b);
    return a-b;
}
console.log(numbers.sort(sortfunc));

// 콜백함수는 수신받는 메소드의 동작방법을 변경할 수 있게 한다.