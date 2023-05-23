// 轉字串解法
export function division(originNumber, divisor, times = 1) {
  const number = originNumber / divisor;
  const originString = number.toString(); // 先把除過的值轉成字串
  const dotIndex = findStringIndex(originString, "."); // 找"."位置，有回傳位置，沒有回傳false
  if (dotIndex) {
    const searchTermIndex = dotIndex + 2; // "."位置+2："."後兩位位置
    const searchTermValue = originString.charAt(searchTermIndex); // 小數點後兩位值
    if (searchTermValue === "0") {
      return times;
    }
    return division(number, divisor, times + 1);
  }
  return times;
}

export function findStringIndex(string, searchTerm) {
  return string.includes(searchTerm) ? string.indexOf(searchTerm) : false;
}

// 數學解法
function division1(originNumber, divisor, times = 1) {
  const number = originNumber / divisor;
  if (Math.trunc(number * 100) % 10 === 0) {
    return times;
  } else {
    return division1(number, divisor, times + 1);
  }
}
