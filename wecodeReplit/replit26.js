// Assignment
// getAnswer 함수를 구현해 주세요.
// getAnswer 함수는 아래의 객체에서 '샐러드' 라는 값을 출력합니다.

let myProfile = {
  name: '김개발',
  address: {
    email: 'geabal@gmail.com',
    home: '위워크'
  },
  'my favorite': {
    food: [{
      name: '샐러드',
      price: 3500
    }, {
      name: '삼겹살',
      price: 15000
    }],
    hobby: ['축구']
  }
}

function getAnswer() {
    return myProfile['my favorite']['food'][0]['name'];
}