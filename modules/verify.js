// 輸入正整數，會排除空格
// 輸入空格,無輸入,+0, -0, 小數, 負數, 負小數, 中英文，會拋出錯誤。
export function isPositiveInteger(string) {
  if (!/^(0|[1-9]\d*)$/.test(string)) {
    throw new Error("這不是整數");
  }
}

// 輸入整數(正、負)
// 輸入空格,無輸入,+0, -0, 小數, 負小數, 中英文，會拋出錯誤。
export function isInteger(string) {
  if (!/^-?[1-9]\d*$|^0$/.test(string)) {
    throw new Error("這不是整數");
  }
}

export function isOverNumber(string, number) {
  if (Number(string) < number) {
    throw new Error(`數字沒有大於${number}`);
  }
}

export function isEven(string) {
  if (!(Number(string) % 2 === 0)) {
    throw new Error("這不是偶數");
  }
}

export function isEnglish(string) {
  if (!/^[a-zA-Z]+$/.test(string)) {
    throw new Error("這不是英文");
  }
}
