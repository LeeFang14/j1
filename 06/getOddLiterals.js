export function getOddLiterals(string) {
  const newString = string.trim(); // 去掉頭尾的空格
  const charArray = newString.split(""); //單個字母存成陣列

  const OddLiteralArray = charArray.filter((char, index) => {
    if (index % 2 === 0) {
      return char;
    }
  });

  return OddLiteralArray.join(",");
}
