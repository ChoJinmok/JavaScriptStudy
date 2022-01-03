var members = ['egoing', 'k8805', 'sorialgi']; //정보를 처리해야될때 연관된 정보들을 묶어두면 편하게 사용 할 수 있다., 배열에 들어있는 값들을 원소(element)라고 한다.

console.log(members);

//원소번호는 0번 부터 시작, 번호는 색인(index)라고 부른다. 인덱스는 책 맨뒤에 색인, 정보를 찾아가는 번호
console.log(members[0]);
console.log(members[1]);
console.log(members[2]);


//배열의 효용
//배열이 없다면
function get_member1() {
    return 'egoing';
}
// 함수의 특징은 여러 인자를 받을 수 있지만 출력은 하나의 값으로 나옴
// 그럼 이런식으로 하나하나 출력 해야하는건가??
function get_member2() {
    return 'k8805';
}
function get_member3() {
    return 'sorialgi';
}
console.log(get_member1());
console.log(get_member2());
console.log(get_member3());

function get_members() {
    return ['egoing', 'k8805', 'sorialgi', 'leezche'];
}
var members2 = get_members();
// console.log(members2[0]);
// console.log(members2[1]);
// console.log(members2[2]);

// 위처럼 배열을 하나하나 꺼내 사용하려면 업무도 많아지고 오류가 생길 확률이 높아진다.(배열의 요소값이 없어지거나 생겼을때)

for (var i = 0; i < members2.length; i++) { // length 배열의 요소 개수를 알려주는 명령(변수명이 length)
    console.log(members2[i].toUpperCase()); // toUpperCase는 JS에서 기본으로 제공하는 함수(내장함수)
}
// 내장함수 <-> 사용자정의함수: 사용자가 정의해서 사용하는 함수


// 배열 제어
//추가

// 끝에 하나 추가
var li = ['a', 'b', 'c', 'd', 'e'];
li.push('f'); 
console.log(li);

// 복수의 원소 추가
li = li.concat(['g', 'h']); //concat뒤의 배열과 li를 합친다음에 배열에 대입해줘야됨
console.log(li);

// 앞쪽에 추가
li.unshift('z'); // 인덱스를 하나씩 추가 하고 앞쪽에 추가
console.log(li);

// 중가에 추가
li.splice(3, 0, 'B'); // splice는 제거한 요소를 return해준다.
console.log(li);

//제거
//첫번쨰 요소 제거
li.shift();
console.log(li);

//맨뒤에 요소 제거
li.pop();
console.log(li);


//정렬
var li2 = ['c', 'e', 'a', 'b', 'd'];
li2.sort();
console.log(li2);

//역순
li.reverse();
li2.reverse();
console.log(li);
console.log(li2);

// JS에서 제공하는 정렬은 기본적인것만 제공 sort(softfunc)으로 커스텀 가능(생활코딩 JavaScript사전 참고)