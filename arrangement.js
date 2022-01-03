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

function get_members