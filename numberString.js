console.log(1);
console.log(1.1+1.1); //JS는 실수 정수 구분하지 않고 numver로 통합해서 사용
console.log(2*8);
console.log(8/2);

// 프로그래밍(컴퓨터)이란 맨처음 계산기로 고안 발전하다보니 지금의 컴퓨터가 됐음
// 그래서 프로그래밍은 여러가지 계싼 기능을 포함하고 있음

Math.pow(3,2);
Math.round(10.6); //반올림
Math.ceil(10.2); //올림
Math.floor(10.2); //버림
Math.sqrt(9); //제곱근
Math.random(); //0~1 에서 랜덤한 실수
var num1 = Math.round(100 * Math.random());
console.log(num1);


// 문자는 큰따옴표 작은따옴표 둘다 가능하다.
console.log("coding everybody");
console.log('coding everybody');
console.log("egoing's coding everybody"); // 사이에 ' 넣고 싶으면 이런식으로 가능함
console.log('egoing"s coding everybody'); // 사이에 " 넣고 싶으면 이런식으로 가능함
console.log('egoing\'s coding everybody'); // \넣어서 넣는 것도 가능 \다음에 오늘 문자는 정보로 인식한다는 약속 -> escape(도망)문자

console.log(1);
console.log("1");
console.log(typeof 1);
console.log(typeof "1");
console.log("abcde"); // 문자들의 모임 : 문자열

console.log("coding\neverybody"); // \n: 개행
console.log("coding"+" "+"everybody");
console.log("1"+"1");
console.log("coding everybody".length); //문자열의 길이 알려줌
console.log("code".indexOf("c")); //문자열에서 찾고자 하는 정보의 위치 알려줌
console.log("code".indexOf("d"));