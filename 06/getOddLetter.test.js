import { getOddLiterals } from "./getOddLiterals.js";

describe.each([
  { input: getOddLiterals("apple"), expected: "a,p,e" },
  { input: getOddLiterals("fang"), expected: "f,n" },
  { input: getOddLiterals("abcde"), expected: "a,c,e" },
])("測試 getOddLetter 輸入的值", ({ input, expected }) => {
  test(`returns ${expected}`, () => {
    expect(input).toBe(expected);
  });
});
