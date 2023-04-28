import { divi } from "./calculate";

describe.each([
  { input: divi(1, 3), expected: 5 },
  { input: divi(2, 3), expected: 5 },
  { input: divi(5, 3), expected: 6 },
  { input: divi(10, 3), expected: 7 },
])("測試 getOddLetter 輸入的值", ({ input, expected }) => {
  test(`returns ${expected}`, () => {
    expect(input).toBe(expected);
  });
});
