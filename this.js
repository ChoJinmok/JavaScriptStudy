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