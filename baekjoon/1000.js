/* 1단계 - 입출력과 사칙연산 : A + B
 * https://www.acmicpc.net/problem/1000
 * Complete
 */

var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a + b);
