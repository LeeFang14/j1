export function getOddLiterals(string) {
  let OddLiteral = [];
  const newString = string.trim(); // 去掉頭尾的空格
  for (let index = 0; index < newString.length; index++) {
    if (index % 2 === 0) {
      OddLiteral.push(newString[index]);
    }
  }
  return OddLiteral.join(",");
}
