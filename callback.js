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