import {
  isPositiveInteger,
  isInteger,
  isOverFour,
  isEven,
  isEnglish,
} from "./verify.js";

describe.each([
  { input: () => isPositiveInteger(" "), expected: "這不是整數" },
  { input: () => isPositiveInteger(""), expected: "這不是整數" },
  { input: () => isPositiveInteger("+0"), expected: "這不是整數" },
  { input: () => isPositiveInteger("-0"), expected: "這不是整數" },
  { input: () => isPositiveInteger("0.5"), expected: "這不是整數" },
  { input: () => isPositiveInteger("-5"), expected: "這不是整數" },
  { input: () => isPositiveInteger("-0.5"), expected: "這不是整數" },
  { input: () => isPositiveInteger("中文"), expected: "這不是整數" },
  { input: () => isPositiveInteger("english"), expected: "這不是整數" },
])("測試 isPositiveInteger 輸入的值", ({ input, expected }) => {
  test(`returns ${expected}`, () => {
    expect(input).toThrow(expected);
  });
});

describe.each([
  { input: () => isInteger(" "), expected: "這不是整數" },
  { input: () => isInteger(""), expected: "這不是整數" },
  { input: () => isInteger("+0"), expected: "這不是整數" },
  { input: () => isInteger("-0"), expected: "這不是整數" },
  { input: () => isInteger("0.5"), expected: "這不是整數" },
  { input: () => isInteger("-0.5"), expected: "這不是整數" },
  { input: () => isInteger("中文"), expected: "這不是整數" },
  { input: () => isInteger("english"), expected: "這不是整數" },
])("測試 isInteger 輸入的值", ({ input, expected }) => {
  test(`returns ${expected}`, () => {
    expect(input).toThrow(expected);
  });
});

describe.each([
  { input: () => isOverFour("-1"), expected: "數字沒有大於4" },
  { input: () => isOverFour("0"), expected: "數字沒有大於4" },
  { input: () => isOverFour("1"), expected: "數字沒有大於4" },
  { input: () => isOverFour("2"), expected: "數字沒有大於4" },
  { input: () => isOverFour("3"), expected: "數字沒有大於4" },
])("測試 isOverFour 輸入的值", ({ input, expected }) => {
  test(`returns ${expected}`, () => {
    expect(input).toThrow(expected);
  });
});

describe.each([
  { input: () => isEven("1"), expected: "這不是偶數" },
  { input: () => isEven("3"), expected: "這不是偶數" },
  { input: () => isEven("5"), expected: "這不是偶數" },
  { input: () => isEven("7"), expected: "這不是偶數" },
  { input: () => isEven("9"), expected: "這不是偶數" },
])("測試 isEven 輸入的值", ({ input, expected }) => {
  test(`returns ${expected}`, () => {
    expect(input).toThrow(expected);
  });
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

describe.each([
  { input: () => isEnglish(""), expected: "這不是英文" },
  { input: () => isEnglish(" "), expected: "這不是英文" },
  { input: () => isEnglish("123"), expected: "這不是英文" },
  { input: () => isEnglish("中文"), expected: "這不是英文" },
  { input: () => isEnglish("abc123"), expected: "這不是英文" },
  { input: () => isEnglish("abc中文"), expected: "這不是英文" },
  { input: () => isEnglish("aaa bbb"), expected: "這不是英文" },
])("測試 isEnglish 輸入的值", ({ input, expected }) => {
  test(`returns ${expected}`, () => {
    expect(input).toThrow(expected);
  });
});
