import { getOddIndexLiterals } from "./getOddIndex.js";

describe.each([
  { input: getOddIndexLiterals("apple"), expected: "a,p,e" },
  { input: getOddIndexLiterals("fang"), expected: "f,n" },
  { input: getOddIndexLiterals("abc def"), expected: "a,c,e" },
])("測試 getOddIndexLiterals 輸入的值", ({ input, expected }) => {
  test(`returns ${expected}`, () => {
    expect(input).toBe(expected);
  });
});
