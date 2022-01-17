function func() {
    if(global === this) { //this는 agguments와 같이 함수안에서 사용되는 키워드(변수)
        console.log('global === this');
    }
}
func();

var o = {
    func : function() {
        if(o === this) {
            console.log('o === this');
        }
    }
}
o.func();


var funcThis = null;

function Func() {
    funcThis = this;
}
var o1 = Func(); // 함수로 호출하면 tbis는 window
if (funcThis === global) {
    console.log('global');
}

var o2 = new Func(); // 생성자의 맥락에서 this는 생성된 객체를 가리키게됨
if (funcThis === o2) {
    console.log('o2');
}
// this는 객체에대한 초기화가 끝나고 객체가 식별자에 담기기 전에 객체를 reference로 활용할 수 있게 해주는 키워드

function sum(x, y) {return x+y;} // JS에서는 단순히 함수를 정희 하는 것이 아닌 함수객체를 만드는 것, 아래 sum2보다 훨씬 간편 -> 아래와 같이 명시적으로 만들 수도 있지만 더 편리하게 값을 만들 수 있게해주는 문법적 체계를 리터럴(literal)이라고 한다. -> 함수리터럴 -> 함수도 객체 -> property를 가짐 -> 그 중 apply와 call을 배우겠다
// 객체리터럴: new Object -> var o = { };
// 배열리터럴: new Array(1,2,3) -> var a = [1,2,3];
var sum2 = new Function('x', 'y', 'return x+y;'); //Functino은 JS에서 제공하는 생성자 함수
console.log(sum(1,2),"=",sum2(1,2));

var o = {};
var p = {};
function funC() {
    switch(this) { // sitch문은 if문의 대체제, for-while관계와 비슷
        case o:
            console.log('o');
            break;
        case p:
            console.log('p');
            break;
        case global:
            console.log('global')
            break;
    }
}
funC();
funC.apply(o); // apply는 함수호출 맥락(context)을 대입시킴
funC.apply(p);

// 전통적인 객체지향에서 메소드는 객체에 강하게 종속되어있음 master-slave관계
// 하지만 JS는 유연 global, o, p 세가지 객체와 funC함수는 서로 대등한 관계(함수도 객체) funC는 호출한 객체에 소속됨(뭔가 현대사회의 고용주와 직원의 관계와 비슷(맥락적))
// ->전통적인 객체지향에서의 메소드보다는 위상이 높지만 맥락적으로 객체에 종속된다.