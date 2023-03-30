// 排除空格、無輸入、中文、英文，只接受數字。
// function isNumber(str) {
//   if (parseFloat(str).toString() === "NaN") {
//     throw new Error("這不是數字");
//   }
// }

// 只能輸入正整數
// 會排除:-0,+0,小數,負數,負小數。
function isInteger(str) {
  if (!/^(?!(-|\+)?0\d)\d+$/.test(str)) {
    throw new Error("這不是數字");
  }
}

// 排除+0
// function isPlusZero(str) {
//   if (str === "+0") {
//     throw new Error("這不是數字");
//   }
// }

// 排除-0
// function isMinusZero(str) {
//   if (str === "-0") {
//     throw new Error("這不是數字");
//   }
// }

// // 排除小數點  isInteger
// function isInteger(num) {
//   if (!Number.isInteger(num)) {
//     throw new Error("這不是整數");
//   }
// }

// 排除負數
function isPositiveInt(num) {
  if (num < 0) {
    throw new Error("這不是正數");
  }
}

function isOverFour(num) {
  if (num < 4) {
    throw new Error("這沒有大於4");
  }
}

function isEven(num) {
  if (!(num % 2 === 0)) {
    throw new Error("這不是偶數");
  }
}

function isEnglish(str) {
  if (!/^[a-zA-Z]+$/.test(str)) {
    throw new Error("這不是英文");
  }
}

export { isInteger, isPositiveInt, isOverFour, isEven, isEnglish };
