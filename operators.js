a = 1; // = : 오른쪽 값을 왼쪽 변수에 넣어주는 대입연산자, 왼쪽오른쪽 두 항을 가지기 때문에 이항연산자 라고도 한다.

console.log(1==2); // == 두개가 있으면 동등연산자(equal operator)
console.log(2==2);
console.log("one" == "one");
console.log("one" == "two");

// 일치연산자 (strict equal operator) -> 엄격하게 검사
console.log(1 === "1"); // false (데이터 타입까지 같아야 true)
console.log(1 == "1"); // true -> 보통 다른 언어들은 엄격하게 검사하지만 JS는 조금 다르다.
// 작은 프로그램은 그냥 == 써서 편하게 해도 괜찮을 수 있지만 자주 사용하다 보면 오류를 만들게 될 확률이 높다
// 될 수 있으면 ===을 사용하는 것이 오류를 많이 줄여줄 수 있고 오류를 미리 발견해 줄 수도 있다.

var b;
console.log(b);
b = null;
console.log(b);

console.log(undefined == null); // true
console.log(undefined === null); // false
/* 
    string
    number
    boolean (true, false)
    undefined  
    null
    -> undefined, null도 하나의 데이터 형태이다. 
*/
console.log(true == 1);
console.log(true == 2);
console.log(true == 3);
// 동등연산자에서 숫자 1은 true로 인식
console.log(true === 1); // false
console.log(true == "1"); // true

console.log(0/0); // 성립하지 않는 수는 NaN(데이터 형식)으로 표시
console.log(NaN === NaN); // false로 표시(예외사항)


// ! 는 부정을 나타낸다.
console.log(1 != 2);
console.log(1 != 1);



console.log(10>20);
console.log(10>1);
console.log(10>10);

console.log(10>=20);
console.log(10>=1);
console.log(10>=10);