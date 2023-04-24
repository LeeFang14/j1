import {
  generateSequence,
  generateFormula,
  calculateSum,
} from "./calculate.js";

describe.each([
  {
    input: generateSequence(1),
    expected: [1],
  },
  {
    input: generateSequence(5),
    expected: [1, 2, -3, 4, -5],
  },
  {
    input: generateSequence(10),
    expected: [1, 2, -3, 4, -5, 6, -7, 8, -9, 10],
  },
])("測試 generateSequence 輸入的值", ({ input, expected }) => {
  test(`returns ${expected}`, () => {
    expect(input).toEqual(expected);
  });
});

describe.each([
  {
    input: generateFormula([1]),
    expected: "1",
  },
  {
    input: generateFormula([1, 2, -3, 4, -5]),
    expected: "1+2-3+4-5",
  },
  {
    input: generateFormula([1, 2, -3, 4, -5, 6, -7, 8, -9, 10]),
    expected: "1+2-3+4-5+6-7+8-9+10",
  },
])("測試 generateFormula 輸入的值", ({ input, expected }) => {
  test(`returns ${expected}`, () => {
    expect(input).toBe(expected);
  });
});

describe.each([
  {
    input: calculateSum([1]),
    expected: 1,
  },
  {
    input: calculateSum([1, 2, -3, 4, -5]),
    expected: -1,
  },
  {
    input: calculateSum([1, 2, -3, 4, -5, 6, -7, 8, -9, 10]),
    expected: 7,
  },
])("測試 calculateSum 輸入的值", ({ input, expected }) => {
  test(`returns ${expected}`, () => {
    expect(input).toBe(expected);
  });
});
