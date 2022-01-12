// arguments : 함수안에서 인자와 관련된 정보를 가지고 있는 객체, 유사배열(배열과 유사한 면이 많음)
// 사용자가 전달한 인자들에대한 정보가 arguments에 담김, 사용자가 전달한 인자들에 접근 가능하게 해줌
// 유사배열 즉 배열과 유사하기 때문에 length와 같은 기능을 사용할 수 있음

function sum() {
    var i, _sum = 0;
    for(i = 0; i < arguments.length; i++) {
        console.log(i+' : '+arguments[i]);
        _sum += arguments[i];
    }
    return _sum;
}
console.log('result : ' + sum(1,2,3,4));


function zero() {
    console.log(
        'zero.length', zero.length,
        'arguments', arguments.length
    );
}
zero();

function one(arg1) {
    console.log(
        'one.length', one.length,
        'arguments', arguments.length
    );
}
one('var1', 'var2');

function two(arg1, arg2) {
    console.log(
        'two.length', two.length,
        'arguments', arguments.length
    );
}
two('val1');
// 함수의 매개변수와 인자의 수를 일치시켜야하는 경우가 있다(JS는 관대해서 매개변수와 인자의 수가 일치 안해도 오류X)
// 그럴경우 비교를 통해서 오류를 내거나 알려 줄 수 있다.