import { getOddLetter } from "./getOddLetter.js";

describe("測試 getOddLetter 輸入的值", function () {
  test("輸入apple 要等於 a,p,l", function () {
    expect(getOddLetter("apple")).toBe("a,p,e");
  });
  test("輸入fang 要等於 f,n", function () {
    expect(getOddLetter("fang")).toBe("f,n");
  });
  test("輸入abcde 要等於 a,c,e", function () {
    expect(getOddLetter("abcde")).toBe("a,c,e");
  });
});
