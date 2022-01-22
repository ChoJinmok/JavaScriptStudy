/*
var arr = new Array('seoul', 'new york', 'ladarkh', 'pusan', 'tsukuba');
function getRandomValueFromArray(arr) {
    var index = Math.floor(arr.length * Math.random());
    var result = arr[index];
    return result;
}
console.log(getRandomValueFromArray(arr));
*/
Array.prototype.random = function() {
    var index = Math.floor(this.length * Math.random());
    var result = this[index];
    return result;
}
var arr = new Array('seoul', 'new york', 'ladarkh', 'pusan', 'tsukuba');
console.log(arr.random());
// Array객체에 메소드를 추가함으로서 가독성이 높아지고 메소드에 인자를 안넣어도 되게 해서 편의성도 높아짐