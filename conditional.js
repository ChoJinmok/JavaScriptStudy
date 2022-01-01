// 조건문은 컴퓨터와 계산기를 구분짓는 중요한 요소

if (true) {
    console.log('result : true');
}

if (false) {
    console.log('result: true');
}

if (true) {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
}
console.log(5);

if (false) {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
}
console.log(5);


if (true) {
    console.log(1);
} else {
    console.log(2);
}

if (false) {
    console.log(1);
} else {
    console.log(2);
}


if (false) {
    console.log(1);
} else if (true) {
    console.log(2);
} else if (true) {
    console.log(3);
} else {
    console.log(4);
}

if (false) {
    console.log(1);
} else if (false) {
    console.log(2);
} else if (true) {
    console.log(3);
} else {
    console.log(4);
}

if (false) {
    console.log(1);
} else if (false) {
    console.log(2);
} else if (false) {
    console.log(3);
} else {
    console.log(4);
}


// boolean값으로 그냥 true false 넣은면 죽은 코드...
var a = 1; 
if (a === 1) {
    console.log(1);
}


// boolean 대체제 
if (1) { //true로 인식
    console.log(1);
}
if (0) { //falsefh 인식
    console.log(1);
}
// 그냥 true, false 사용하는게 제일 좋다

if ('') { // 빈문자열은 false로 인식
    console.log('빈문자열'); 
}
if ('egoing') { // 그냥 문자열은 true로 인식
    console.log('egoing');
}
if (undefined) { // false로 간주
    console.log('undefined');
}
var c;
if (c) { // 변수를 선언만 하면 undefined이기 떄문
    console.log('undefined');
}
if (null) { // flase
    console.log('null');
}
if (NaN) { // false
    console.log('NaN');
}