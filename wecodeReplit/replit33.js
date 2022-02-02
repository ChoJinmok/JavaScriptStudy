const thisIsPw = document.getElementById('password');
const thisIsButton = document.getElementsByClassName('login-btn')[0];
const thisIsRePw = document.getElementById('re-password');
const thisIsCode = document.getElementById('code');

// thisIsButton.addEventListener('click', function() {
//   const pw = thisIsPw.value;
//   const rePw = thisIsRePw.value;

//   if(!pw) {
//     alert('비밀번호를 입력해주세요!');
//     return;
//   }

//   if(!rePw) {
//     alert('비밀번호 확인을 입력해주세요!');
//     return;
//   }

//   if(pw !== rePw) {
//     alert('비밀번호가 맞지 않습니다!');
//     return;
//   }

//   alert('회원가입 성공!!');
// })

// thisIsPw.addEventListener('keydown', function(event) {
//   thisIsCode.innerHTML = event.code;
// })

const classAlert = document.getElementsByClassName('alert')[0];
thisIsRePw.addEventListener('keyup', function() {
  let pw = thisIsPw.value;
  let rePw = thisIsRePw.value;    
  if(pw === rePw) {
    classAlert.innerHTML = ''
  } else {
    classAlert.innerHTML = '비밀번호가 일치하지 않습니다.'
  }
});