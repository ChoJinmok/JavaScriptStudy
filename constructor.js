// JS는 다른 객체지향프로그래밍 언어들과는 다르다. 돋특한 특징을 가짐(Prototype-based prgramming)
// 객체지향의 문법을 비슷하게 가지고 있으면서 함수형언어의 특성도 가지고 있는 독특한 언어
// 다른언어와 다르게 규제 통제가 약함 오히려 어려울 수 있음

// 연관되어있는 변수와 메소드를 객체에 담는 것이 객체지향프로그래밍의 기본형태(연관되어 있는 것들을 그루핑, 카테골라이징)
// 각각의 객체들은 독립성을 가짐(독립된 프로그램) -> 부품을 만듬

var person = {}; //object는 데이터를 담을 수 있는 상자
person.name = 'egoing' //객체에서 변수는 property
person.introduce = function() { //객체의 property가 함수를 담고 있다면 그것은 메소드
    return 'My name is ' + this.name; //this는 메소드가 담겨있는 객체를 가리킴
}
console.log(person.introduce());
// 객체를 정의하는 코드와 property들이 분리 되어 있어 다른 코드가 끼어들 여지를 주고 가독성도 떨어지게된다.

var person = {
    'name' : 'egoing',
    'introduce' : function() {
        return 'My name is ' + this.name;
    }
}
console.log(person.introduce());

var person2 = {
    'name' : 'leezche',
    'introduce' : function() {
        return 'My name is ' + this.name;
    }
}
// 이런식으로 계속 만들면 중복이 많아짐(메소드가 완전 동일) -> 안좋은 코드(코드의 양이 많아지고 가독성 떨어지고 유지보수 어려원짐)

// JS는 함수지향언어라고도 불림 함수가 JS에서 얼마나 큰 역할을 하는지 짐작할 수 있는데 JS에서 객체를 제대로 이해하려면 함수가 우선시 되야한다. 함수에서 흔들리면 객체도 흔들림.
function Person() {}
var p0 = Person(); //Person에서 아무것도 리턴하고 있지 않기떄문에 p0은 undefined
var p = new Person();//함수 앞에 new가 붙으면 Person을 함수라고 부르지 않고 생성자라고 부른다.(객체를 생성)
console.log(p);//빈객체가 만들어짐, var p = {};과 비슷한 결과
//함수는 객체의 시중만 드는 것이 아닌 객체의 창시자이기도 하다
p.name = 'egoing';
p.introduce = function() {
    return 'My name is ' + this.name;
}
console.log(p.introduce());
// 이렇게만 하면 {}이렇게 객체 만들었을때와 차이가 없음

function Person2(name) {
    this.name = name;
    this.introduce = function() {
        return 'My name is ' + this.name;
    }
}
// 생성자는 객체에대한 초기화를 진행함, 객체의 정보 역할을 세팅해놓은 것 -> init, initialize
var p1 = new Person2('egoing');
console.log(p1.introduce());
var p2 = new Person2('leezche');
console.log(p2.introduce());