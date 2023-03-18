import {
  isNumber,
  isInteger,
  isPositiveInt,
  isPlusZero,
  isMinusZero,
  isOverFour,
  isEven,
} from "./verify.js";

test("測試 isNumber 輸入的值", () => {
  expect(() => isNumber("")).toThrow("這不是數字");
  expect(() => isNumber(" ")).toThrow("這不是數字");
  expect(() => isNumber("中文")).toThrow("這不是數字");
  expect(() => isNumber("english")).toThrow("這不是數字");
});

test("測試 isPlusZero 輸入的值", () => {
  expect(() => isPlusZero("+0")).toThrow("這不是零");
});

test("測試 isMinusZero 輸入的值", () => {
  expect(() => isMinusZero("-0")).toThrow("這不是零");
});

test("測試 isInteger 輸入的值", () => {
  expect(() => isInteger(0.5)).toThrow("這不是整數");
  expect(() => isInteger(-0.5)).toThrow("這不是整數");
});

test("測試 isPositiveInt 輸入的值", () => {
  expect(() => isPositiveInt(-1)).toThrow("這不是正數");
  expect(() => isPositiveInt(-0.5)).toThrow("這不是正數");
});

test("測試 isOverFour 輸入的值", () => {
  expect(() => isOverFour(-1)).toThrow("這沒有大於4");
  expect(() => isOverFour(0)).toThrow("這沒有大於4");
  expect(() => isOverFour(1)).toThrow("這沒有大於4");
  expect(() => isOverFour(2)).toThrow("這沒有大於4");
  expect(() => isOverFour(3)).toThrow("這沒有大於4");
});

test("測試 isEven 輸入的值", () => {
  expect(() => isEven(1)).toThrow("這不是偶數");
  expect(() => isEven(3)).toThrow("這不是偶數");
  expect(() => isEven(5)).toThrow("這不是偶數");
  expect(() => isEven(7)).toThrow("這不是偶數");
  expect(() => isEven(9)).toThrow("這不是偶數");
});
