import {
  generateSequence,
  generateFormula,
  calculateSum,
} from "./calculate.js";

describe("測試 generateSequence 輸入的值", function () {
  test("輸入1 要等於:[1]", function () {
    expect(generateSequence(1)).toEqual([1]);
  });
  test("輸入5 要等於:[1, 2, -3, 4, -5]", function () {
    expect(generateSequence(5)).toEqual([1, 2, -3, 4, -5]);
  });
  test("輸入10 要等於:[1, 2, -3, 4, -5, 6, -7, 8, -9, 10]", function () {
    expect(generateSequence(10)).toEqual([1, 2, -3, 4, -5, 6, -7, 8, -9, 10]);
  });
});

describe("測試 generateFormula 輸入的值", function () {
  test("輸入[1] 要等於:1", function () {
    expect(generateFormula([1])).toBe("1");
  });
  test("輸入[1, 2, -3, 4, -5] 要等於:1+2-3+4-5", function () {
    expect(generateFormula([1, 2, -3, 4, -5])).toBe("1+2-3+4-5");
  });
  test("輸入[1, 2, -3, 4, -5, 6, -7, 8, -9, 10] 要等於:1+2-3+4-5+6-7+8-9+10", function () {
    expect(generateFormula([1, 2, -3, 4, -5, 6, -7, 8, -9, 10])).toBe(
      "1+2-3+4-5+6-7+8-9+10"
    );
  });
});

describe("測試 calculateSum 輸入的值", function () {
  test("輸入[1] 要等於:1", function () {
    expect(calculateSum([1])).toBe(1);
  });
  test("輸入[1, 2, -3, 4, -5] 要等於:-1", function () {
    expect(calculateSum([1, 2, -3, 4, -5])).toBe(-1);
  });
  test("輸入[1, 2, -3, 4, -5, 6, -7, 8, -9, 10] 要等於:7", function () {
    expect(calculateSum([1, 2, -3, 4, -5, 6, -7, 8, -9, 10])).toBe(7);
  });
});
