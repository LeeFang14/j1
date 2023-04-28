export function getOddLiterals(string) {
  let OddLiteral = [];
  const newString = string.trim(); // 去掉頭尾的空格
  for (let index = 0; index < newString.length; index++) {
    if (index % 2 === 0) {
      OddLiteral.push(newString[index]);
    }
  }
  console.log(OddLiteral);
  console.log(typeof OddLiteral[1]);
  // return OddLiteral.join(",");
}

// 現有問題：如果英文名字是輸入`fang Lee`中間帶有空格的，需要去掉空格計算奇數位置嗎？
// 還是連空格都要算進去？
getOddLiterals(" 12 345 67890 ");
