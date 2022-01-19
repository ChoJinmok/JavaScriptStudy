// 객체라는 컨테이너 안에는 어떠한 로직과 작업과 관련된 변수와 메소드가 담겨있다.
// 객체는 이미 만들어진 객체를 상속받을 수 있는데(변수와 메소드에 연결됨)
// 상속받은 객체는 부모객체를 그대로 사용하지 않고 어떠한 기능은 제외하고 추가하면서 자신의 맥락에 맞게 부모객체의 로직을 재활용함

function Person(name) {
    this.name = name;
    this.introduce = function() {
        return 'My name is ' + this.name;
    }
}
var p1 = new Person('egoing');
console.log(p1.introduce());


function Person2(name) {
    this.name = name;
}
Person2.prototype.name = null;
Person2.prototype.introduce = function() {
    return 'My nickname is ' + this.name;
}
var p2 = new Person2('egoing');
console.log(p2.introduce());


function Programmer(name) {
    this.name = name;
}
Programmer.prototype = new Person2();
// Programmer의 prototype 값에 new Person2한다.
// new Person2는 생성자는 객체를 생성
// JS는 생성자가 객체를 만들때 prototype에 있는 값을 포함해서 생성자 함수 안에있는 객체와 똑같은 객체를 만들어서 생성자의 결과로 리턴
// new Person2()는 위의 결과를 리턴받아서 Programmer의 prototype에 대입된다.
var p3 = new Programmer('egoing');
console.log(p3.introduce());


function Programmer2(name){
    this.name = name;
}
Programmer2.prototype = new Person2();
Programmer2.prototype.coding = function() {
    return "Hello, world";
}

function Designer(name){
    this.name = name;
}
Designer.prototype = new Person2();
Designer.prototype.design = function() {
    return "Beautiful!";
}

var p4 = new Programmer2('egoing');
console.log(p4.introduce());
console.log(p4.coding());

var p5 = new Designer('leezche');
console.log(p5.introduce());
console.log(p5.design());

// JS는 프로토타입베이스의 언어 -> 함수, 객체에서 큰 비중을 차지