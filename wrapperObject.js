var str = 'coding';
console.log(str.length);
// str.length를 한 순간
// str new String('coding');이 일어남
// 사용이 끝난 객체는 원시데이터타입으로 돌아감
console.log(str.charAt(0));
// str 다음에 오는 점 . 은 Object aceess operator이다. 이말은 str을 객채로 사용한 것

str.prop = 'everyvody';
// 다시 원시데이터로 돌아갔음
console.log(str.prop);
// wrapper(감싸는) object는 원시데이터를 객체처럼 사용할때 순간적으로 객체처럼 보이게 감싸 준다.