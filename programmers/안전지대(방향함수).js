// 프로그래머스 - 안전지대

// 문제 설명
// 지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
// 지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.

// 입출력 예시
// board:
// [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0],
];
function solution(board) {
  // 8방향 (상, 하, 좌, 우, 좌상, 우상, 좌하, 우하)
  const dx = [-1, 1, 0, 0, -1, -1, 1, 1];
  const dy = [0, 0, -1, 1, -1, 1, -1, 1];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      // 1인 요소 탐색
      if (board[i][j] === 1) {
        // 8방향을 이동하면서 위험지역 표시 (0을 2로 변경)
        // nx, ny가 이동한 좌표가 됩니다.
        for (let d = 0; d < 8; d++) {
          const nx = i + dx[d];
          const ny = j + dy[d];
          // 이동한 좌표들이 주어진 배열의 범위를 벗어나지 않는지 확인하고
          // 벗어나지 않으면, 0을 2로 변경합니다.
          if (nx >= 0 && nx < board.length && ny >= 0 && ny < board[0].length) {
            if (board[nx][ny] === 0) {
              board[nx][ny] = 2;
            }
          }
        }
      }
    }
  }
  // 반복문 밖에 다시 반복문을 써주는 이유는, 전처리(1주위 0을 2로 변경)를 한번 해주고
  // 그 배열에서 0의 개수를 세게 하기 위함입니다.
  let safeCount = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 0) safeCount++;
    }
  }
  return safeCount;
}
