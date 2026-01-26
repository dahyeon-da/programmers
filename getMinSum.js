function getMinSum(A, B) {
  var sortA = A.sort((a, b) => a - b);
  var sortB = B.sort((a, b) => b - a);

  var answer = 0;

  for (let i = 0; i < A.length; i++) {
    answer += sortA[i] * sortB[i];
  }
  // A는 오름차순, B는 내림차순하여 순서대로 곱하고 그 값들을 더하여 최솟값을 구하는 방법

  return answer;
}

const A = [1, 4, 2];
const B = [5, 4, 4];

console.log(getMinSum(A, B));

/**
 * 입력
 * A - [1, 4, 2], B - [5, 4, 4]
 *
 * 출력
 * 29
 *
 * ----------------------------------------
 *
 * 입력
 * A - [1, 2], B - [3, 4]
 *
 * 출력
 * 10
 */
