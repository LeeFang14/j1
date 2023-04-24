// 輸入正整數，會排除空格
// 輸入空格,無輸入,+0, -0, 小數, 負數, 負小數, 中英文，會拋出錯誤。
export function isPositiveInteger(str) {
  if (!/^(0|[1-9]\d*)$/.test(str)) {
    throw new Error("這不是整數");
  }
}

// 輸入整數(正、負)
// 輸入空格,無輸入,+0, -0, 小數, 負小數, 中英文，會拋出錯誤。
export function isInteger(str) {
  if (!/^-?[1-9]\d*$|^0$/.test(str)) {
    throw new Error("這不是整數");
  }
}

export function isOverFour(str) {
  if (Number(str) < 4) {
    throw new Error("數字沒有大於4");
  }
}

export function isEven(str) {
  if (!(Number(str) % 2 === 0)) {
    throw new Error("這不是偶數");
  }
}

export function isEnglish(str) {
  if (!/^[a-zA-Z]+$/.test(str)) {
    throw new Error("這不是英文");
  }
}
