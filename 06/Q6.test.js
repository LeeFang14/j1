import { Q6 } from "./Q6.js";

describe("測試 Q6 會輸出", () => {
  test(`輸入"Fang Lee", "Lisa", "Alex", "Jason"，會輸出
        "第1個Fang Lee的單數個字母: F,n,L,e"
        "第3個Alex的單數個字母: A,e"`, () => {
    expect(Q6(["Fang Lee", "Lisa", "Alex", "Jason"])).toBe(
      "第1個Fang Lee的單數個字母: F,n,L,e\n第3個Alex的單數個字母: A,e"
    );
  });
});

describe("測試 Q6 會拋出異常", () => {
  test("無輸入", () => {
    expect(() => Q6("")).toThrow();
  });
  test("輸入空格", () => {
    expect(() => Q6(" ")).toThrow();
  });
  test("輸入數字", () => {
    expect(() => Q6("123")).toThrow();
  });
  test("輸入中文", () => {
    expect(() => Q6("中文")).toThrow();
  });
  test("輸入英文+數字", () => {
    expect(() => Q6("abc123")).toThrow();
  });
  test("輸入英文+中文", () => {
    expect(() => Q6("abc中文")).toThrow();
  });
  test("輸入數字+英文", () => {
    expect(() => Q6("123abc")).toThrow();
  });
  test("輸入中文+英文", () => {
    expect(() => Q6("中文abc")).toThrow();
  });
});
