// 객체가 가고 있어야하는 데이터(메소드, 프로퍼티)를 깔고 시작하고 싶을때 -> 프로토타입 사용
// 원형(프로토타입)은 이러한 데이터를 가지고 있다
// 프로토타입에 객체를 저장해놓고 생성자를 호출하게되면 프로토타입의 객체가 리턴됨


// prototype chain
function Ultra(){};
Ultra.prototype.ultraProp = true;

function Super(){};
Super.prototype = new Ultra();

function Sub(){};
Sub.prototype = new Super();

var o = new Sub();
console.log(o.ultraProp);