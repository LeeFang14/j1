import { isModEqual } from "./isModEqual.js";

describe("測試 isModEqual 輸入的值", function () {
  test("輸入3,6 要等於：餘數相同", function () {
    expect(isModEqual(3, 6)).toBe("餘數相同");
  });
  test("輸入1,1 要等於：餘數相同", function () {
    expect(isModEqual(1, 1)).toBe("餘數相同");
  });
  test("輸入10,20 要等於：餘數不同", function () {
    expect(isModEqual(10, 20)).toBe("餘數不同");
  });
});
