import { Q9 } from "./Q9.js";

describe("測試 Q9 預期應輸出", () => {
  test("輸入[2, 3, 1, 7, 9], [8, 7, 9, 3, 1]，應輸出: 相加後的陣列: 10,10,10,10,10", () => {
    expect(Q9([2, 3, 1, 7, 9], [8, 7, 9, 3, 1])).toBe(
      "相加後的陣列: 10,10,10,10,10"
    );
  });
});

describe("測試 Q9 預期應輸出", () => {
  test("輸入[2, 3, 1, 7, 9, 1], [8, 7, 9, 3, 1]，應輸出: 相加後的陣列: 10,10,10,10,10,1", () => {
    expect(Q9([2, 3, 1, 7, 9, 1], [8, 7, 9, 3, 1])).toBe(
      "相加後的陣列: 10,10,10,10,10,1"
    );
  });
});

describe("測試 Q9 預期應輸出", () => {
  test("輸入[2, 3, 1, 7, 9], [8, 7, 9, 3, 1, 2]，應輸出: 相加後的陣列: 10,10,10,10,10,2", () => {
    expect(Q9([2, 3, 1, 7, 9], [8, 7, 9, 3, 1, 2])).toBe(
      "相加後的陣列: 10,10,10,10,10,2"
    );
  });
});
