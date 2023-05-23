import { division, findStringIndex } from "./calculate";

describe.each([
  { input: division(1, 3), expected: 5 },
  { input: division(2, 3), expected: 5 },
  { input: division(5, 3), expected: 6 },
  { input: division(10, 3), expected: 7 },
])("測試 division 輸入的值", ({ input, expected }) => {
  test(`returns ${expected}`, () => {
    expect(input).toBe(expected);
  });
});

describe("測試 findStringIndex(string, searchTerm)輸入的值", function () {
  test(`輸入:("123", ".") 輸出: false`, function () {
    expect(findStringIndex("123", ".")).toBeFalsy();
  });
  test(`輸入:("123.456", ".") 輸出: 3`, function () {
    expect(findStringIndex("123.456", ".")).toBe(3);
  });
  test(`輸入:("123", "1") 輸出: 0`, function () {
    expect(findStringIndex("123", "1")).toBe(0);
  });
  test(`輸入:("123", "4") 輸出: false`, function () {
    expect(findStringIndex("123", "4")).toBeFalsy();
  });
});
