import { division } from "./calculate";

describe.each([
  { input: division(1, 3), expected: 5 },
  { input: division(2, 3), expected: 5 },
  { input: division(5, 3), expected: 6 },
  { input: division(10, 3), expected: 7 },
])("測試 getOddLetter 輸入的值", ({ input, expected }) => {
  test(`returns ${expected}`, () => {
    expect(input).toBe(expected);
  });
});
