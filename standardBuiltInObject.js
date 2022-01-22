var arr = new Array('seoul', 'new york', 'ladarkh', 'pusan', 'tsukuba');
function getRandomValueFromArray(arr) {
    var index = Math.floor(arr.length * Math.random());
    var result = arr[index];
    return result;
}
console.log(getRandomValueFromArray(arr));