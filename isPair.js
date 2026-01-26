function isPair(s) {
  var count = 0;
  var cur = 0;
  var arr = s.split("");
  while (count >= 0 && cur < s.length) {
    if (arr[cur] === "(") {
      count++;
    } else {
      count--;
    }
    cur++;
  }
  if (count === 0) {
    return true;
  } else {
    return false;
  }
}
// 왼쪽 괄호가 올때는 +1 오른쪽 괄호가 올때는 -1을 하여 최종합이 0일때 괄호의 짝이 맞으면 true, 아니라면 false를 반환
// 계산이 끝나기 전 count가 음수가 되어도 while문을 벗어나서 false 반환

const s = "()()";

console.log(isPair(s));

/**
 * 입력
 * "()()"
 *
 * 출력
 * true
 *
 * -------------------------------------------
 *
 * 입력
 * "(())()"
 *
 * 출력
 * true
 *
 * -------------------------------------------
 *
 * 입력
 * "(()("
 *
 * 출력
 * false
 */
