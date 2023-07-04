import { Q4 } from "./Q4.js";

describe("測試 Q4 會輸出", () => {
  test(`輸入"5"，會輸出"算式: 1+2-3+4-5 , 總和: -1"`, () => {
    expect(Q4("5")).toBe("算式: 1+2-3+4-5 , 總和: -1");
  });
  test(`輸入"10"，會輸出"算式: 1+2-3+4-5+6-7+8-9+10 , 總和: 7"`, () => {
    expect(Q4("10")).toBe("算式: 1+2-3+4-5+6-7+8-9+10 , 總和: 7");
  });
});

describe("測試 Q4 會拋出異常", () => {
  test("無輸入", () => {
    expect(() => Q4("")).toThrow();
  });
  test("輸入空格", () => {
    expect(() => Q4(" ")).toThrow();
  });
  test("輸入+0", () => {
    expect(() => Q4("+0")).toThrow();
  });
  test("輸入-0", () => {
    expect(() => Q4("-0")).toThrow();
  });
  test("輸入0.5", () => {
    expect(() => Q4("0.5")).toThrow();
  });
  test("輸入-5", () => {
    expect(() => Q4("-5")).toThrow();
  });
  test("輸入中文", () => {
    expect(() => Q4("中文")).toThrow();
  });
  test("輸入english", () => {
    expect(() => Q4("english")).toThrow();
  });
});
