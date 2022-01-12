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


// 소프트웨어가 커지는 과정에서 어떤 정보를 아무나 수정 못하게 할 떄 사용하는 것을 private variable
// 소프트웨어가 커지다 보면 많은 사람의 손을 타게됨(미래의 나도 포함), 소프트웨어안에 맣은 데이터들이 존재하게됨
// 그 때 누구든지 모든 데이터에 접근할 수 있다는 말은 소프트웨어가 망가질 가능성이 높다는 말
function factory_movie(title) {
    return {
        get_title : function() {
            return title;
        },
        set_title : function(_title) {
            if (typeof _title === 'String') {
                title = _title;
            } else {
                console.log('제목은 문자열이어야 합니다.');
            }
        }
    }
}
ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('matrix');
console.log(ghost.get_title());
console.log(matrix.get_title());

ghost.set_title('공각기동대');
console.log(ghost.get_title());
console.log(matrix.get_title());
// 함수가 실행되고 나면 소멸되지만 get_title, set_title메소드안에서 title은 계속 존재
// factory_movie를 통해 객체를 만들고 객체가 만들어진 시점에서의 맥락(외부함수의 지역변수)에만 접근가능하고 유지되고 있음
// 함수를 통해 만들어진 객체는 서로 영향을 주지않음(private)
// 위의 함수처럼 작성해놓으면 title이란 변수에 접근하려면 get_title로만 접근 가능하고 변경하려면 set_title로만 수정가능