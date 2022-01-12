function sum(arg1, arg2) {
    return arg1 + arg2;
}
console.log(sum(1,2));
console.log(sum.apply); // JS에서 함수는 객체이기떄문에 속성과 메소드를 가지고 있음
console.log(sum.apply(null, [1,2])); // apply의 첫번쨰 인자로 null을 쓸거면 위의 방법으로! 다른것을 넣는 경우가 있음

o1 = {val1:1, val2:2, val3:3};
o2 = {v1:10, v2:50, v3:100, v4:25};
function sum2() {
    var _sum = 0;
    for (name in this) { // this는 함숙가 호출될 때 결정됨
        _sum += this[name];
    }
    return _sum;
}
console.log(sum2.apply(o1)); // apply의 첫번째 인자로 o1을 넣어주면 this는 o1을 가리키게 됨(함수 맨위에 'var this = o1'코드가 들어갔다고 생각하면 편함)
console.log(sum2.apply(o2));


// o1.sum, o2.sum 과 같은 결과를 낼 수 있다.
function sum3() {
    var _sum = 0;
    for(name in this) {
        if(typeof this[name] !== 'function') {
            _sum += this[name];
        }
    }
    return _sum;
}
o1 = {val1:1, val2:2, val3:3, sum:sum3};
o2 = {v1:10, v2:50, v3:100, v4:25, sum:sum3};
console.log(o1.sum());
console.log(o2.sum());