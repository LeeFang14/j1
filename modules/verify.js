// 排除空格、無輸入、中文、英文，只接受數字。
function isNumber(n) {
  if (parseFloat(n).toString() === "NaN") {
    throw new Error("這不是數字");
  }
}

// 排除小數點，包含負數。
function isInteger(n) {
  if (!Number.isInteger(n)) {
    throw new Error("這不是整數");
  }
}

// 排除負數
function isPositiveInt(n) {
  if (n < 0) {
    throw new Error("這不是正數");
  }
}

// 排除+0
function isPlusZero(n) {
  if (n === "+0") {
    throw new Error("這不是零");
  }
}

// 排除-0
function isMinusZero(n) {
  if (n === "-0") {
    throw new Error("這不是零");
  }
}

export { isNumber, isInteger, isPositiveInt, isPlusZero, isMinusZero };
