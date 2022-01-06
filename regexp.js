// 찾고자 하는 정보를 변수에 저장
// 찾고자 하는 정보를 어떻게 표현 할 것인가가 중요(여러 규칙들이 있음)

var pttern = /a/;

var patern = new RegExp('a');

// 프로그래밍은 다른 업무와 같이 작업의 대상을 찾고 그 대상에 어떤 작업을 할지 정하는 것이다.
// 정규표현식은 찾고자 하는 정보의 패턴을 만들어서 패턴에 해당하는 정보를 찾아서 추출, 테스트, 치환 하는 것

// 정규표현식은 RegExp객체를 만들어낸다. 위에서 RegExp의 이름은 pattern
// RegExp객체 안에는 여러 명령어들이 있다.

console.log(patern.exec('abcde'));

var pattern = /a./; //여디거 . 은 문자 1개를 나타낸다.
console.log(patern.exec('abcde'));