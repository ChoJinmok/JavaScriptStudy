// 변수 : 값을 담는 그릇(컨테이너) 언어에서 대명사와 비슷
var a = 1;
console.log(a+1);

var b = 2;
console.log(a+b);

a = 2;
console.log(a+b);

var first = 'coding';
console.log(first + 'everybody');
first = '코딩';
console.log(first + 'everybody');

var a = 'coding', b = 'everybody';
console.log(a+b);


// 코드는 왜 사용하는가?
// 1. 코드의 재사용성이 증가한다.
//    코드에서 변할 수 있는 영역과 변할 수 없는 영역 나눠서 보는게 좋다!
//    변하지 않아야 하는 영역에 변할 수 있는 영역이 섞여 있으면 유지보수를 하기 어렵다.

console.log(100+10);
console.log((100+10)/10);
console.log(((100+10)/10)-10);
console.log((((100+10)/10)-10)*10);

a = 100;
a = a + 10;
console.log(a);
a = a / 10 ;
console.log(a);
a = a - 10;
console