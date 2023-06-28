import { Q4 } from "./Q4.js";

describe("測試 Q4 預期應輸出", () => {
  test("輸入5，應輸出算式:1+2-3+4-5,總和:-1", () => {
    expect(Q4("5")).toEqual({ strSequence: "1+2-3+4-5", numTotal: -1 });
  });
  test("輸入10，應輸出算式:1+2-3+4-5+6-7+8-9+10,總和:7", () => {
    expect(Q4("10")).toEqual({
      strSequence: "1+2-3+4-5+6-7+8-9+10",
      numTotal: 7,
    });
  });
});

describe("測試 Q4 預期應拋出異常", () => {
  test("無輸入，應拋出異常", () => {
    expect(() => Q4("")).toThrow();
  });
  test("輸入空格，應拋出異常", () => {
    expect(() => Q4(" ")).toThrow();
  });
  test("輸入+0，應拋出異常", () => {
    expect(() => Q4("+0")).toThrow();
  });
  test("輸入-0，應拋出異常", () => {
    expect(() => Q4("-0")).toThrow();
  });
  test("輸入0.5，應拋出異常", () => {
    expect(() => Q4("0.5")).toThrow();
  });
  test("輸入-5，應拋出異常", () => {
    expect(() => Q4("-5")).toThrow();
  });
  test("輸入中文，應拋出異常", () => {
    expect(() => Q4("中文")).toThrow();
  });
  test("輸入english，應拋出異常", () => {
    expect(() => Q4("english")).toThrow();
  });
});
