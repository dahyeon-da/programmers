function solution(s) {
  var answer = "";

  for (let i = 0; i < s.length; i++) {
    if (i === 0 || s[i - 1] === " ") {
      answer += s[i].toUpperCase();
      // 첫 글자 또는 이전 글자가 공백일때 대문자로 변환
    } else {
      answer += s[i].toLowerCase();
    }
  }

  return answer;
}

/**
 * 입력
 * "3people unFollowed me"
 *
 * 출력
 * "3people Unfollowed Me"
 *
 * --------------------------------------------
 *
 * 입력
 * "for the last week"
 *
 * 출력
 * "For The Last Week"
 */
