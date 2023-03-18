import {
  isNumber,
  isInteger,
  isPositiveInt,
  isPlusZero,
  isMinusZero,
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
