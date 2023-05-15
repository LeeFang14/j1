import { getOddIndexValue, getOddIndexLiterals } from "./getOddIndex.js";

describe.each([
  {
    input: getOddIndexValue(["aaa", "bbb", "ccc", "ddd"]),
    expected: ["aaa", "ccc"],
  },
])("測試 getOddIndexValue 輸入的值", ({ input, expected }) => {
  test(`returns ${expected}`, () => {
    expect(input).toEqual(expected);
  });
});

describe.each([
  { input: getOddIndexLiterals("apple"), expected: "a,p,e" },
  { input: getOddIndexLiterals("fang"), expected: "f,n" },
  { input: getOddIndexLiterals("abc def"), expected: "a,c,d,f" },
])("測試 getOddIndexLiterals 輸入的值", ({ input, expected }) => {
  test(`returns ${expected}`, () => {
    expect(input).toBe(expected);
  });
});
