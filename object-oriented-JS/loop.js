// // while vs do-while
// let i = 11;
// while (i < 10) {
//     i++;
// }
// console.log(i);

// let j = 11;
// do {
//     j++;
// } while (j < 10);
// console.log(j);
// do-while의 경우 조건이 평가되기 전에 코드 블록이 항상 최소 한번은 실행

// let punishment = '';
// for (let i = 0; i < 100; i++) {
//     punishment += 'I will never do this again, ';
// }
// console.log(punishment);

// for (
//     var i = 0, punishment = '';
//     i < 100;
//     i++, punishment += 'I will never do this again, ') {
    
// }
// console.log(punishment);
// 초기화, 조건, 증가 부분 모두 쉼표로 구분해서 여러 표현식 포함할 수 있다.
// let으로 초기화 할경우 여러 표현식 포함 안됨
// 위와 같은 코드가 가능하다는 것이지 좋은 코드 아님

let i = 0, punishment = '';
for (;;) {
    punishment += 'I will never do this again, ';
    if (++i === 100) {
        break;
    }
}
console.log(punishment);
// 위와같은 방법도 가능...