// while (true) { // 무한 반복함 -> 무한루프 컴퓨터에게 부담을 준다. -> 코딩하다보면 자주나올 수 있는 오류 -> 적당할때 false로 바껴야함
//     console.log("Coding everybody");
// }

// var i = 0;
// while (i < 10) {
//     console.log("Coding everybody");
//     i++;
// }

for(var i = 0; i < 10; i++) {
    console.log("Coding everybody");
}

var i = 0;
console.log(i++); //후행 증가

i = 0;
console.log(++i); //선행 증가