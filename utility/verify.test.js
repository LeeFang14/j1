import {
  isEmpty,
  isSpace,
  isPositiveInteger,
  isInteger,
  isOverNumber,
  isEven,
  isEnglish,
} from "./verify.js";

describe.each([{ input: () => isEmpty(""), expected: "您沒有輸入" }])(
  "測試 isEmpty 輸入的值",
  ({ input, expected }) => {
    test(`returns ${expected}`, () => {
      expect(input).toThrow(expected);
    });
  }
);

describe.each([{ input: () => isSpace(" "), expected: "勿輸入空格" }])(
  "測試 isSpace 輸入的值",
  ({ input, expected }) => {
    test(`returns ${expected}`, () => {
      expect(input).toThrow(expected);
    });
  }
);

describe.each([
  { input: () => isPositiveInteger(" "), expected: "這不是正整數" },
  { input: () => isPositiveInteger(""), expected: "這不是正整數" },
  { input: () => isPositiveInteger("+0"), expected: "這不是正整數" },
  { input: () => isPositiveInteger("-0"), expected: "這不是正整數" },
  { input: () => isPositiveInteger("0.5"), expected: "這不是正整數" },
  { input: () => isPositiveInteger("-5"), expected: "這不是正整數" },
  { input: () => isPositiveInteger("-0.5"), expected: "這不是正整數" },
  { input: () => isPositiveInteger("中文"), expected: "這不是正整數" },
  { input: () => isPositiveInteger("english"), expected: "這不是正整數" },
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
  { input: () => isOverNumber("-1", 4), expected: "數字沒有大於4" },
  { input: () => isOverNumber("0", 4), expected: "數字沒有大於4" },
  { input: () => isOverNumber("1", 4), expected: "數字沒有大於4" },
  { input: () => isOverNumber("2", 4), expected: "數字沒有大於4" },
  { input: () => isOverNumber("3", 4), expected: "數字沒有大於4" },
])("測試 isOverNumber 輸入的值", ({ input, expected }) => {
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

describe.each([
  { input: () => isEnglish("123"), expected: "這不是英文" },
  { input: () => isEnglish("中文"), expected: "這不是英文" },
  { input: () => isEnglish("abc123"), expected: "這不是英文" },
  { input: () => isEnglish("abc中文"), expected: "這不是英文" },
])("測試 isEnglish 輸入的值", ({ input, expected }) => {
  test(`returns ${expected}`, () => {
    expect(input).toThrow(expected);
  });
});
