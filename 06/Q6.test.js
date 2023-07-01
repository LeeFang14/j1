import { Q6 } from "./Q6.js";

describe("測試 Q6 預期應輸出", () => {
  test(`輸入["aa aa aa", "bb bb bb", "cc cc cc", "dd dd dd"]，應輸出:["a,a,a","c,c,c"]`, () => {
    expect(Q6(["aa aa aa", "bb bb bb", "cc cc cc", "dd dd dd"])).toEqual([
      "結果: a,a,a",
      "結果: c,c,c",
    ]);
  });
});
