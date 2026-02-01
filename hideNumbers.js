function solution(phone_number) {
  var sharp = "";
  var answer = "";
  sharp = "*".repeat(phone_number.length - 4);
  // 문자를 반복하여 문자열로 만들어줌

  answer = phone_number.slice(4);
  return sharp + answer;
}

/**
 * 입력
 * "01033334444"
 *
 * 출력
 * "*******4444"
 *
 * ---------------------------------------
 *
 * 입력
 * "027778888"
 *
 * 출력
 * "*****8888"
 */

// 또 다른 해결 방법 - replace 사용
