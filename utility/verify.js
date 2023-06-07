// 沒有輸入和輸入空格會拋出錯誤
export function isEmpty(string) {
  if (string.trim().length === 0) {
    throw new Error("需輸入值");
  }
}

// 輸入0會拋出錯誤
export function isZero(string) {
  if (Number(string) === 0) {
    throw new Error("需輸入零以外的值");
  }
}

// 只能輸入正整數
export function isPositiveInteger(string) {
  if (!/^(0|[1-9]\d*)$/.test(string)) {
    throw new Error("需輸入正整數");
  }
}

// 只能輸入正整數、負整數
export function isInteger(string) {
  if (!/^-?[1-9]\d*$|^0$/.test(string)) {
    throw new Error("需輸入整數");
  }
}

export function isOverNumber(string, number) {
  if (Number(string) < number) {
    throw new Error(`需輸入大於${number}的數字`);
  }
}

export function isLengthEqualNumber(string, number) {
  if (string.length !== number) {
    throw new Error(`需輸入${number}個的字數`);
  }
}

export function isEven(string) {
  if (!(Number(string) % 2 === 0)) {
    throw new Error("需輸入偶數");
  }
}

export function isEnglish(string) {
  if (!/^[A-Za-z ]+$/.test(string)) {
    throw new Error("需輸入英文");
  }
}
