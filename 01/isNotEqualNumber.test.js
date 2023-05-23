import { isNotEqualNumber } from "./isNotEqualNumber.js";

describe.each([
  { input: isNotEqualNumber(0, 0), expected: false },
  { input: isNotEqualNumber(1, 0), expected: true },
  { input: isNotEqualNumber(10, 0), expected: true },
])("測試 isPlayMovie 輸入的值", ({ input, expected }) => {
  test(`returns ${expected}`, () => {
    expect(input).toBe(expected);
  });
});
