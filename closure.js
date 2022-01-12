function outter() {
    function inner() { // 내부함수 만드는 이융는 어떤 특정 함수에서만 쓰이는 함수가 있을 수 있어서 응집성을 높여주고 가독성도 높여준다.
        var title = 'coding everybody';
        console.log(title);
    }
    inner();
}
outter();

function outter2() {
    var title = 'coding everybody';
    function inner() {
        console.log(title); // inner함수 내에서 먼저 title변수를 찾고 없으면 밖으로 이동
    }
    inner();
}
outter2();


function outter3() {
    var title = 'coding everybody';
    return function() {
        console.log(title);
    };
};
inner = outter3();
inner();