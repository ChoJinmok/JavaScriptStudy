// 변수가 존재하는지 확인

// 첫번쨰 방법
// let result = '';
// let somevar;
// if (somevar) {
//     result = 'yes';
// }
// console.log(result);
// somevar가 정의되고 초기화됐어도 falsy한 값일수도 있기 때문에 정확한 방법이 아니다.

// 두번째 방법
// if(typeof somevar !== "undefined") {
//     result = 'yes';
// }
// console.log(result);
// 첫번쨰보다 좋은 방법이지만 변수가 선언은 됐지만 할당이 되지 않았을 수도 있기때문에 여전히 정확하지 않다.(undefined가 아닌지 판별)

// //간단한 조건문의 경우 대체 if 구문
// const a = 1;
// // let result = '';
// // if (a === 1) {
// //     result = "a is one";
// // } else {
// //     result = "a is not one";
// // }

// //아래와 같이 바꿀 수 있다.
// const a = 1;
// let result = ( a === 1 ) ? "a is one" : "a is not one";
// console.log(result);

// 간단할 떄만 사용!! 남용금지!! 복잡해지면 가독성 떨어지게 됨
let a = 123;
// a = a > 100 ? 100 : a < 50 ? 50 : a;
// console.log(a);
// 위의 코드가 어떻게 독장하는지 파악하기 어려움

// a = ( a > 100 ? 100 : a < 50 ) ? 50 : a;
// console.log(a);

a = a > 100 ? 100 : ( a < 50 ? 50 : a );
console.log(a);
// 괄호에 따라 값이 달라짐

// ?는 세 개의 피연산자가 필요함 -> 삼항 연산자