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