function sum(arg1, arg2) {
    return arg1 + arg2;
}
console.log(sum(1,2));
console.log(sum.apply); // JS에서 함수는 객체이기떄문에 속성과 메소드를 가지고 있음
console.log(sum.apply(null, [1,2])); // apply의 첫번쨰 인자로 null을 쓸거면 위의 방법으로! 다른것을 넣는 경우가 있음