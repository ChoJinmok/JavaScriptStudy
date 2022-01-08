var vscope = 'global';
function fscope() {
    console.log(vscope); // 함수내에 전역변수 불러 올 수 있다.
};
fscope();


function fscope2() {
    var vscope = 'local';
    console.log(vscope); // 호출할때 가까운 쪽부터 참고(함수안, 지역변수), 만약 함수안에 호출할 변수가 없으면 전역변수 참고
};
fscope2();

function fscope3() {
    var vscope = 'local';
    var lv = 'local variable';
    console.log(lv);
}
fscope3();
// console.log(lv); // lv는 지역변수로 함수 안(지역)에서만 접근 가능


function fscope4() {
    var vscope = 'local'; //함수 안에서 var로 함수를 정의 하면 지역변수를 정의
}
fscope4();
console.log(vscope);


function fscope5() {
    vscope = 'local'; //var을 빼면 전역변수를 수정하게 된다.
}
fscope5();
console.log(vscope);


var vscope = 'global';
function fscope6() {
    var vscope = 'local'; 
    vscope = 'local';   //지역변수를 수정
}
fscope6();
console.log(vscope);

// 협업을 하다보면 or 혼자 코딩하더라도 오래된 경우 전역변수를 많이 정의 하게 되면 나중에 오류가 생길 확률이 높아짐
// 웸만하면 지역변수를 많이 사용하는 것이 좋음(전역변수를 사용해야하는 이유를 명확하게 알지못한다면)


function a() {
    var i = 0;
}
for (var i = 0; i < 5; i++) {
    a();
    console.log(i);
}

// function a2() {
//     i = 0;
// }
// for (var i = 0; i < 5; i++) {
//     a2();
//     console.log(i);
// }

// 원래 유효범위라는 개념이 없었음 없었을때는 변수 앞에 자신의 닉네임을 붙여서 관리(이름의 충돌 관리)
// 전역변수 지역변수는 디렉토리와 비슷(변수들이 많아지면 관리하기 편해짐)


// 전역변수를 사용해야한다면
var MYAPP = {}
MYAPP.calculator = {
    'left' : null,
    'right' : null
}
MYAPP.coordinate = {
    'left' : null,
    'right' : null
}
// 객체 calculator와 coordinate는 둘다 left, right라는 변순를 가지지만 의미가 다름

MYAPP.calculator.left = 10;
MYAPP.calculator.right = 20;
function sum() {
    return MYAPP.calculator.left + MYAPP.calculator.right;
}
console.log(sum());

(function() {
    var MYAPP = {} // 함수의 지역변수로 바꾸고 익명 함수로 실행 -> 전역변수가 하나도 없는 어플
    MYAPP.calculator = {
        'left' : null,
        'right' : null
    }
    MYAPP.coordinate = {
        'left' : null,
        'right' : null
    }
    // 객체 calculator와 coordinate는 둘다 left, right라는 변순를 가지지만 의미가 다름

    MYAPP.calculator.left = 10;
    MYAPP.calculator.right = 20;
    function sum() {
        return MYAPP.calculator.left + MYAPP.calculator.right;
    }
    console.log(sum());
}());

function myappfn() {
    var MYAPP = {} // 함수의 지역변수로 바꾸고 익명 함수로 실행 -> 전역변수가 하나도 없는 어플
    MYAPP.calculator = {
        'left' : null,
        'right' : null
    }
    MYAPP.coordinate = {
        'left' : null,
        'right' : null
    }
    // 객체 calculator와 coordinate는 둘다 left, right라는 변순를 가지지만 의미가 다름

    MYAPP.calculator.left = 10;
    MYAPP.calculator.right = 20;
    function sum() {
        return MYAPP.calculator.left + MYAPP.calculator.right;
    }
    console.log(sum());
}
myappfn(); // 이렇게 해도 되긴 하지만 myappfn또함 전역변수



// 정적 유효 범위
var i = 5;

function a() {
    var i = 10;
    b(); // 호출된 시점의 전역변수(함수a의 지역변수)를 가지는 것이 아님
}

function b() {
    console.log(i); // b함수 안에 지역변수가 없기 때문에 함수b가 선언!!!된 시점의 전역변수 값을 가져오게 된다.
}

a();

// 만약 호출된 시점의 전역변수를 사용한다면 전역변수 값이 계속 달라지게 되므로 동적 유효범위라고 했을 것