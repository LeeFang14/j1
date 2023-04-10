import {
  isPositiveInteger,
  isInteger,
  isOverFour,
  isEven,
  isEnglish,
} from "./verify.js";

test("測試 isPositiveInteger 輸入的值", () => {
  expect(() => isPositiveInteger(" ")).toThrow("這不是整數");
  expect(() => isPositiveInteger("")).toThrow("這不是整數");
  expect(() => isPositiveInteger("+0")).toThrow("這不是整數");
  expect(() => isPositiveInteger("-0")).toThrow("這不是整數");
  expect(() => isPositiveInteger("0.5")).toThrow("這不是整數");
  expect(() => isPositiveInteger("-5")).toThrow("這不是整數");
  expect(() => isPositiveInteger("-0.5")).toThrow("這不是整數");
  expect(() => isPositiveInteger("中文")).toThrow("這不是整數");
  expect(() => isPositiveInteger("english")).toThrow("這不是整數");
});

test("測試 isInteger 輸入的值", () => {
  expect(() => isInteger(" ")).toThrow("這不是整數");
  expect(() => isInteger("")).toThrow("這不是整數");
  expect(() => isInteger("+0")).toThrow("這不是整數");
  expect(() => isInteger("-0")).toThrow("這不是整數");
  expect(() => isInteger("0.5")).toThrow("這不是整數");
  expect(() => isInteger("-0.5")).toThrow("這不是整數");
  expect(() => isInteger("中文")).toThrow("這不是整數");
  expect(() => isInteger("english")).toThrow("這不是整數");
});

test("測試 isOverFour 輸入的值", () => {
  expect(() => isOverFour("-1")).toThrow("數字沒有大於4");
  expect(() => isOverFour("0")).toThrow("數字沒有大於4");
  expect(() => isOverFour("1")).toThrow("數字沒有大於4");
  expect(() => isOverFour("2")).toThrow("數字沒有大於4");
  expect(() => isOverFour("3")).toThrow("數字沒有大於4");
});

test("測試 isEven 輸入的值", () => {
  expect(() => isEven("1")).toThrow("這不是偶數");
  expect(() => isEven("3")).toThrow("這不是偶數");
  expect(() => isEven("5")).toThrow("這不是偶數");
  expect(() => isEven("7")).toThrow("這不是偶數");
  expect(() => isEven("9")).toThrow("這不是偶數");
});

test("測試 isEnglish 輸入的值", () => {
  expect(() => isEnglish("")).toThrow("這不是英文");
  expect(() => isEnglish(" ")).toThrow("這不是英文");
  expect(() => isEnglish("123")).toThrow("這不是英文");
  expect(() => isEnglish("中文")).toThrow("這不是英文");
  expect(() => isEnglish("abc123")).toThrow("這不是英文");
  expect(() => isEnglish("abc中文")).toThrow("這不是英文");
  expect(() => isEnglish("aaa bbb")).toThrow("這不是英文");
});
