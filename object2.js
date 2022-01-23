// JS에서 모든 객체는 Object의 자식(상송받음)
// Object.prototype은 모든 객체의 prototype(원형)이 된다.
// 모든 객체가 Object의 기능을 가진다.(Object.prototype에 저장되어 있음)
// Object.prototype에 기능을 추가해서 모든객체에 기능을 줄 수 있다.

//Object.keys()
var arr = ["a", "b", "c"];
console.log('Object.keys(arr) :', Object.keys(arr));

var o = {"name" : "egoing", "age" : 20, "city" : "seoul"};
console.log(Object.keys(o));



//Object.prototype.toString() -> prototype의 메소드일때 차이점에 주목
var arr2 = new Object();
console.log('arr2.toString() :', arr2.toString()); //객체의 메소드로 사용

var a = new Array(1,2,3); // Array도 Object의 자식
console.log('a.toString() :', a.toString());
// new Object()실행하는 순간 prototype property에 저장돼있는 객체를 원형으로 하는 객체가 생성
// Object.prototype를 수정해서 기능을 추가 할 수도 있음

Object.prototype.contain = function(needle) {
    for(var name in this){
        if(this[name] === needle){
            return true;
        }
    }
    return false;
}
var o = {'name':'egoing', 'city':'seoul'};
console.log(o.contain('egoing'));
var a = ['egoing', 'leezche', 'grapittie'];
console.log(a.contain('leezche'));
// 위의 방법은 모든 객체에 영향을 주기때문에 신중하게 하는 것이 좋다
for(var name in o){
    if(o.hasOwnProperty(name)){ //인자로 전달된 값을 자기가 property로 가지고 있는지 체크해줌
        console.log(name);
    }
}
// 모든 객체에 contain이 포함되게 된다.
// for in구문을 작성했을떄 자기가 객체에 넣지 않은 데이터가 추가되서 나옴