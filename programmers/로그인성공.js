// 프로그래머스 - 로그인 성공

// 문제설명
// 입력한 아이디와 패스워드가 담긴 배열 id_pw와 회원들의 정보가 담긴 2차원 배열 db가 주어질 때,
// 다음과 같이 로그인 성공, 실패에 따른 메시지를 return하도록 solution 함수를 완성해주세요.

// 입출력 예시
// id_pw : ["programmer01", "15789"]
// db : [["programmer02", "111111"], ["programmer00", "134"], ["programmer01", "1145"]]
// result : "wrong pw"

function solution(id_pw, db) {
  const answer = [];

  for (let i = 0; i < db.length; i++) {
    if (id_pw[0] === db[i][0]) {
      if (id_pw[1] === db[i][1]) {
        answer.push('login');
      } else {
        answer.push('wrong pw');
      }
    } else {
      answer.push('fail');
    }
  }

  if (answer.includes('login')) {
    return 'login';
  } else if (answer.includes('wrong pw')) {
    return 'wrong pw';
  } else {
    return 'fail';
  }
}
