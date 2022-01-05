// 서로 연관돼있는 데이터들을 담는 그릇이라는 점에서 배열과 유사
// 배열은 색인(숫자)로 데이터를 불러온다.
// 객체는 원하는 key를 설정해서 key로 데이터를 불러온다.

var grades = {'egoing' : 10, 'k8805' : 6, 'sorialgi' : 80};
console.log(grades);

var grades = {};
grades['egoing'] = 10;
grades['k8805'] = 6;
grades['sorialgi'] = 80;
console.log(grades);

var grades = new Object();
grades['egoing'] = 10;
grades['k8805'] = 6;
grades['sorialgi'] = 80;
console.log(grades);

console.log(grades['egoing']);
console.log(grades.egoing);
console.log(grades['ego'+'ing']);
// console.log(grades.'ego'+'ing');

//배열은 순서를 가지고 있어서 순서가 아주 중요, 그러나 객체는 key, value로 존재하고 순서를 가지고 있지 않다.
//그래서 객체는 다른 방법으로 반복문에 적용된다.

for (key in grades) { //key라는 변수가 생성되고, grades의 key값니 하나씩 대입된다.
    console.log("key : " + key + ", value : " + grades[key]);
}

for (var name in grades) { //key라는 변수가 생성되고, grades의 key값니 하나씩 대입된다.
    console.log("key : " + name + ", value : " + grades[name]);
}
// html에 리스트 만들때 유용

//,배열에서도 for in 문 사용 가능, var name에 인덱스값이 들어감


var grade2 = {
    'list' : {'egoing' : 10, 'k8805' : 8, 'soiralgi' : 80},
    'show' : function() {
        console.log('Hello world');
    },
    'show2' : function() {
        console.log(this); //this는 JS에서 약속되있는 정해져있는 변수, 함수가 소속돼있는 객체를 가리킴
    },
    'show3' : function() {
        for (key in this.list) {
            console.log(key, this.list[key]);
        }
    }
}
console.log(grade2['list']['egoing']);
grade2['show']();
grade2['show2']();
grade2.show3();

// list왜 show함수들처럼 서로 연관돼있는 것들을 그루핑하는 프로그래밍 기법을 객체지향프로그래밍