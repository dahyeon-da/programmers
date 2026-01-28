function nextBigNumber(n) {
  var nNum = String(n.toString(2))
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0);
  // 각 자릿수의 합을 구해서 1의 갯수 알아내기

  for (let i = n + 1; i <= 1000000; i++) {
    if (
      nNum ===
      String(i.toString(2))
        .split("")
        .map(Number)
        .reduce((a, b) => a + b, 0)
    ) {
      return i;
    }
  }
}

const n = 78;
console.log(nextBigNumber(n));

/**
 * 입력
 * 78
 *
 * 출력
 * 83
 *
 * ---------------------------------------------------
 *
 * 입력
 * 15
 *
 * 출력
 * 23
 */
