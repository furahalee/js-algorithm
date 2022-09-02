import Stack from "./Stack.mjs";

// 10진수 숫자 num을 특정 진수로 변환하기
function mulBase(num, base) {
  const s = new Stack();
  do {
    s.push(num % base);
    num = Math.floor((num /= base));
  } while (num > 0);
  let converted = "";
  while (s.length() > 0) {
    converted += s.pop();
  }
  return converted;
}
const num = 32;
const base = 2;
const newNum = mulBase(num, base);

console.log(num + "converted to base " + base + "is " + newNum);
