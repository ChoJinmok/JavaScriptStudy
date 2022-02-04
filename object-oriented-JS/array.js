//배열에서 요소 삭제
let a = [1, 2, 3];
delete a[1];
console.log(a); // 배열에 구멍이 생김
console.log(typeof a[1]); // undefined