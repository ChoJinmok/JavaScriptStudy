// 함수는 재용성! 을 높여줌, 재사용성(좋은 부품을 만드는것)을 익히는 것이 진짜 중요, 부품을 좋게 바꾸면 부품을 사용하는 곳도 다 개선됨 -> 유지보수 용의, 가독성 높아짐, 협업시에도 다른 사함이 만든 함수를 사용할때도 방법만 알면 사용하기 쉽다.


//함수 정의
function numberOne() {
    console.log(1);
}

//함수 호출
numberOne(); //괄호가 있어야 함수로 인식 없으면 변수로 인식


function numbering() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
}
numbering()

// 똑같은 기능을 여러 번 반복할때 함수의 효용이 드러난다.
numbering()
numbering()

// 기계적으로 단순하게 반복될때는 반복문이 더 좋을 수 있음
// 맥락에 맞게 반복해야한다면 함수!


//return

function get_member1() {
    return 'egoing';
}

function  get_member2() {
    return 'k8805';
}

function get_member3() {
    return 'leezche'; // return을 처음만나면 종료됨 뒤에 코드 실행X
    return 'graphittie';
    return 'egoing';
}

console.log(get_member1());
console.log(get_member2());
console.log(get_member3());


// 입력
function get_argument(arg) { // arg : 매개변수(parameter)
    return arg * 1000;
}

console.log(get_argument(1)); // 1: 인자(argument)
console.log(get_argument(2));

// 함수의 목표는 입력값에 따라 취지에 따라 계산된 결과가 출력되는 것

function get_argument2(arg1, arg2) {
    return arg1 + arg2;
}

console.log(get_argument2(10, 20));
console.log(get_argument2(20, 30));