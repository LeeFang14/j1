/*
  驗證的部分：從哪個角度去寫？
	1. 依輸入去驗證，例如：需輸入數字，但輸入英文 `throw new Error("請勿輸入英文");`
	2. 只能輸入什麼去驗證，例如：需輸入數字，但輸入英文 `throw new Error("請輸入數字");`
  如果要抓使用者輸入的值去提示錯誤訊息，會提示不完。可能還會有順序問題。
  但用只能輸入什麼去提示，這個提示又會只有一種。對使用者來說會很困惑，輸入什麼都不對的感覺。
*/

// 1. 依輸入值去驗證

// 沒有輸入會拋出錯誤
export function isEmpty(string) {
  if (string === "") {
    throw new Error("您沒有輸入");
  }
}

// 輸入空格會拋出錯誤
export function isSpace(string) {
  if (string.trim().length === 0) {
    throw new Error("勿輸入空格");
  }
}

// 2. 只能輸入什麼去驗證
// 只能輸入正整數
export function isPositiveInteger(string) {
  if (!/^(0|[1-9]\d*)$/.test(string)) {
    throw new Error("這不是正整數");
  }
}

// 只能輸入正整數、負整數
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
  if (!/^[A-Za-z ]+$/.test(string)) {
    throw new Error("這不是英文");
  }
}
