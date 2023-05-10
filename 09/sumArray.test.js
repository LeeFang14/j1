import { sumArray } from "./sumArray";

describe.each([
  {
    input: sumArray([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]),
    expected: [2, 4, 6, 8, 10],
  },
  {
    input: sumArray([10, 20, 30, 40, 50], [10, 20, 30, 40, 50]),
    expected: [20, 40, 60, 80, 100],
  },
])("測試 sumArray 輸入的值", ({ input, expected }) => {
  test(`returns ${expected}`, () => {
    expect(input).toEqual(expected);
  });
});
