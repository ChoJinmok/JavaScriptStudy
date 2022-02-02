// Assignment
// index.js에 아래의 내용을 구현해주세요.
// p 태그를 생성하고 (hint: createElement),
// 해당 요소에 dom 이라는 class 이름을 주고 (hint: className)
// 해당 요소에 "DOM" 이라는 텍스트를 넣어서 (hint: innerHTML)
// h1요소 내부에 추가 (hint: appendChild)

function addPTag() {
    let pElement = document.createElement('p');
    pElement.className = 'dom';
    pElement.innerHTML = 'DOM';

    let title = document.getElementsByTagName('h1')[0];
    title.appendChild(pElement);
}
addPTag();