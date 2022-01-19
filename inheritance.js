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
    return 'My name is ' + this.name;
}
var p2 = new Person2('egoing');
console.log(p2.introduce());