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
