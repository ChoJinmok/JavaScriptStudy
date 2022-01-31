// Assignment
// 아래 설명을 읽고 getExamResult 함수를 구현하세요.

// 인자 scores 는 다음과 같은 객체입니다. 객체의 요소의 갯수 및 키의 이름들은 달라질 수 있습니다. 객체의 값은 다음 9가지 문자열 중에서 하나를 가지고 있습니다.
// 'A+', 'A', 'B+', 'B', 'C+', 'C', 'D+', 'D', 'F'
// {
//   '생활속의회계': 'C',
//   '논리적글쓰기': 'B',
//   '독일문화의이해': 'B+',
//   '기초수학': 'D+',
//   '영어회화': 'C+',
//   '인지발달심리학': 'A+',
// }

// 인자 requiredClasses 는 다음과 같이 문자열로 된 배열입니다.
// ['영어회화', '기초수학', '공학수학', '컴퓨터과학개론']

// 다음 조건을 만족하는 객체를 리턴하도록 함수를 구현해주세요.
// scores 객체가 가지고 있는 키들은 새로운 객체에 포함되어야 합니다. 단, 그 값들은 다음 원리에 따라 숫자로 바뀌어 할당되어야 합니다.
// A+ => 4.5
// A => 4
// B+ => 3.5
// B => 3
// C+ => 2.5
// C => 2
// D+ => 1.5
// D => 1
// F => 0
// requiredClasses 배열의 요소로는 존재하지만, scores의 키로는 존재하지 않는 항목이 있다면, 해당 요소는 새로운 객체의 키가 되고, 값으로 0을 가져야 합니다. 위에서 예시로 묘사된 객체와 배열이 인자로 들어왔다면, 다음과 같은 객체과 리턴됩니다. 요소간 순서는 다를수 있지만, 채점에 무관합니다.
// {
//   '생활속의회계': 2,
//   '논리적글쓰기': 3,
//   '독일문화의이해': 3.5,
//   '기초수학': 1.5,
//   '영어회화': 2.5,
//   '인지발달심리학': 4.5,
//   '공학수학': 0,
//   '컴퓨터과학개론': 0,
// }

const getExamResult = (scores, requiredClasses) => {
    for (let key in scores) {
      let score = scores[key];
      if(score === 'A+') {
        score = 4.5;
      } else if(score === 'A') {
        score = 4;
      } else if(score === 'B+') {
        socre = 3.5;
      } else if(score === 'B') {
        score = 3.0;
      } else if(score === 'C+') {
        score = 2.5;
      } else if(score === 'C') {
        score = 2;
      } else if(score === 'D+') {
        score = 1.5;
      } else if(score === 'D') {
        score = 1;
      } else if(score === 'F') {
        score = 0;
      }
      scores[key] = score;
    }
  
    const scoredClasses = Object.keys(scores);
    for (let i in requiredClasses) {
      if(scoredClasses.indexOf(requiredClasses[i]) < 0) {
        scores[requiredClasses[i]] = 0;
      }
    }
    return scores;
  }