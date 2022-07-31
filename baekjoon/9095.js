/* 다이나믹 프로그래밍 : 1, 2, 3 더하기
 * https://www.acmicpc.net/problem/9095
 * Complete
 */

var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");
const T = parseInt(input[0]);
const arr = [];

for (let i = 0; i < T; i++) {
  arr.push(parseInt(input[i + 1]));
}

function factorial(num) {
  let facNumber = num;
  let sum = 1;
  while (facNumber > 0) {
    sum = sum * facNumber;
    facNumber--;
  }
  return sum;
}

function calculate(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    for (let j = 0; j <= num; j++) {
      for (let k = 0; k <= num; k++) {
        if (1 * i + 2 * j + 3 * k == num) {
          sum =
            sum +
            factorial(i + j + k) / (factorial(i) * factorial(j) * factorial(k));
        }
      }
    }
  }
  return sum;
}

for (const num of arr) {
  console.log(calculate(num));
}
