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