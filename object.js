// 서로 연관돼있는 데이터들을 담는 그릇이라는 점에서 배열과 유사
// 배열은 색인(숫자)로 데이터를 불러온다.
// 객체는 원하는 key를 설정해서 key로 데이터를 불러온다.

var grades = {'egoing' : 10, 'k8805' : 6, 'sorialgi' : 80};
console.log(grades);

var grades2 = {};
grades2['egoing'] = 10;
grades2['k8805'] = 6;
grades2['sorialgi'] = 80;
console.log(grades2);

var grades2 = new Object();
grades2['egoing'] = 10;
grades2['k8805'] = 6;
grades2['sorialgi'] = 80;
console.log(grades2);

console.log(grades['egoing']);
console.log(grades.egoing);
console.log(grades['ego'+'ing']);
// console.log(grades.'ego'+'ing');