// 원시데이터타입 -> 복제
var a = 1;
var b = a;
// 데이터 1을 복제한후 b는 그 데이터를 가리키게 됨
b = 2;
console.log(a);

// 객체(참조)데이터타입 -> 참조
var a = {'id':1};
var b = a;
// a와 b 둘다 똑같은 데이터를 가리키고 있음(복제x 참조)
b.id = 2;
console.log(a.id);

var a = {'id':1};
var b = a;
b = {'id':2}; // 새 객체를 만듬
console.log(a.id);

var a = 1;
function func(b){
    b = 2;
}
func(a);
console.log(a);
// 맨위의 코드와 같다

var a = {'id':1};
function func(b){
    b = {'id':2};
}
func(a);
console.log(a.id);

function func2(b){
    b.id = 2;
}
func2(a);
console.log(a.id)