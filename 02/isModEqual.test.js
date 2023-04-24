import { isModEqual } from "./isModEqual.js";

describe.each([
  { input: isModEqual(3, 6, 3), expected: true },
  { input: isModEqual(1, 1, 3), expected: true },
  { input: isModEqual(10, 20, 3), expected: false },
])("測試 isModEqual 輸入的值", ({ input, expected }) => {
  test(`returns ${expected}`, () => {
    expect(input).toBe(expected);
  });
});
