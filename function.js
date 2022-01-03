// 함수는 재용성! 을 높여줌, 재사용성을 익히는 것이 진짜 중요


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