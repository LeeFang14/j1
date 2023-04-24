import { umlEven, calculateSum } from "./calculate.js";

describe.each([
  { input: umlEven(2), expected: [2] },
  { input: umlEven(4), expected: [4, 2] },
  { input: umlEven(10), expected: [10, 8, 6, 4, 2] },
])("測試 umlEven 輸入的值", ({ input, expected }) => {
  test(`returns ${expected}`, () => {
    expect(input).toEqual(expected);
  });
});

describe.each([
  { input: calculateSum([2, 4]), expected: 8 },
  { input: calculateSum([2, 4, 6]), expected: 32 },
  { input: calculateSum([2, 4, 6, 8]), expected: 80 },
])("測試 calculateSum 輸入的值", ({ input, expected }) => {
  test(`returns ${expected}`, () => {
    expect(input).toBe(expected);
  });
});
