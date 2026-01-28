function solution(food) {
  var answer = "";
  var count = [];
  var foodStr = "";

  for (let i = 1; i < food.length; i++) {
    count.push(Math.floor(food[i] / 2));
  }
  // ex) 음식이 5개 있으면 두명이 두개씩 먹을 수 있음.

  for (let i = 1; i <= count.length; i++) {
    foodStr += String(i).repeat(count[i - 1]);
  }
  answer = foodStr + "0" + foodStr.split("").reverse().join("");

  return answer;
}

/**
 * 입력
 * [1, 3, 4, 6]
 *
 * 출력
 * 1223330333221
 *
 * --------------------------------------------
 *
 * 입력
 * [1, 7, 1, 2]
 *
 * 출력
 * 111303111
 */
