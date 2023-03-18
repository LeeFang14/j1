import { umlEven, calculateSum } from "./calculate.js";

describe("測試 umlEven 輸入的值", function () {
  test("輸入2 要等於:[2]", function () {
    expect(umlEven(2)).toEqual([2]);
  });
  test("輸入4 要等於:[4, 2]", function () {
    expect(umlEven(4)).toEqual([4, 2]);
  });
  test("輸入10 要等於:[10, 8, 6, 4, 2]", function () {
    expect(umlEven(10)).toEqual([10, 8, 6, 4, 2]);
  });
});

describe("測試 calculateSum 輸入的值", function () {
  test("輸入[2, 4] 要等於:8", function () {
    expect(calculateSum([2, 4])).toBe(8);
  });
  test("輸入[2, 4, 6] 要等於:32", function () {
    expect(calculateSum([2, 4, 6])).toBe(32);
  });
  test("輸入[2, 4, 6, 8] 要等於:80", function () {
    expect(calculateSum([2, 4, 6, 8])).toBe(80);
  });
});
