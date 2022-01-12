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