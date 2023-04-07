// 輸入正整數，會排除空格
// 匹配:空格,無輸入,+0, -0, 小數, 負數, 負小數, 中英文。
function isPositiveInteger(str) {
  if (!/^(0|[1-9]\d*)$/.test(str)) {
    throw new Error("這不是整數");
  }
}

// 輸入整數(正、負)
// 匹配:空格,無輸入,+0, -0, 小數, 負小數, 中英文。
function isInteger(str) {
  if (!/^-?[1-9]\d*$|^0$/.test(str)) {
    throw new Error("這不是整數");
  }
}

function isOverFour(str) {
  if (Number(str) < 4) {
    throw new Error("數字沒有大於4");
  }
}

function isEven(str) {
  if (!(Number(str) % 2 === 0)) {
    throw new Error("這不是偶數");
  }
}

function isEnglish(str) {
  if (!/^[a-zA-Z]+$/.test(str)) {
    throw new Error("這不是英文");
  }
}

export { isPositiveInteger, isInteger, isOverFour, isEven, isEnglish };
