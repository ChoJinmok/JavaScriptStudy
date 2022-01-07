// 찾고자 하는 정보를 변수에 저장
// 찾고자 하는 정보를 어떻게 표현 할 것인가가 중요(여러 규칙들이 있음)

var pattern = /a/;

var pattern = new RegExp('a');

// 프로그래밍은 다른 업무와 같이 작업의 대상을 찾고 그 대상에 어떤 작업을 할지 정하는 것이다.
// 정규표현식은 찾고자 하는 정보의 패턴을 만들어서 패턴에 해당하는 정보를 찾아서 추출, 테스트, 치환 하는 것

// 정규표현식은 RegExp객체를 만들어낸다. 위에서 RegExp의 이름은 pattern
// RegExp객체 안에는 여러 명령어들이 있다.

console.log(pattern.exec('abcde'));

var pattern = /a./; //여디거 . 은 문자 1개를 나타낸다.
console.log(pattern.exec('abcde'));

var pattern = /a/;
console.log(pattern.exec('bcdef'));

console.log(pattern.test('abcde'));
console.log(pattern.test('bcdef'));

// exec는 값을 추출해서 배열에 넣어주는 용도, test는 있는지 없는지를 테스트해서 boolean값으로 전달


//문자열에서 메소드 사용하기
var pattern = /a/;
var str = 'abcdef';
console.log(str.match(pattern));

//대체후 문자열로 전달
console.log(str.replace(pattern, 'A'));


//옵션
//i는 대문자를 구분할지 안할지를 알려주는 옵션
var xi = /a/;
console.log("Abcde".match(xi));

var oi = /a/i;
console.log("Abcde".match(oi));

//중복값을 모두 추출헐자 안할지
var xg = /a/;
console.log("abcdea".match(xg));

var og = /a/g;
console.log("abcdea".match(og));

//여러 옵션 동시에 사용가능
var ig = /a/ig;
console.log("AabcdeAa".match(ig));

//활용
//자세한 정규표현식 문법은 따로 배워야함 느낌만 보기
var pattern = /(\w+)\s(\w+)/; 
// ()는 그룹으로 묶음
// \w는 A~Z, a~z, 0~9 의 문자 한글자
// +는 하나 이상
// \s 는 white space(공백)
var str = "coding everybody";
var result = str.replace(pattern, "$2, $1");
console.log(result);