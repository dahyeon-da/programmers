function solution(brown, yellow) {
  var answer = [];
  var extent = 0;

  for (let length = 1; length < brown; length++) {
    for (let width = 1; width < brown; width++) {
      extent = length * width;
      if (extent === yellow + brown && yellow === (width - 2) * (length - 2)) {
        answer.push(width);
        answer.push(length);
      }
    }
  }
  if (answer.length === 2) {
    return answer;
  } else {
    return [answer[0], answer[1]];
  }
}

/**
 * 입력
 * brown - 10, yellow - 2
 *
 * 출력
 * [4, 3]
 *
 * ---------------------------------------------
 *
 * 입력
 * brown - 8, yellow - 1
 *
 * 출력
 * [3, 3]
 */
