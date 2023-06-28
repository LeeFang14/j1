import { Q5 } from "./Q5.js";

describe("測試 Q5 預期應輸出", () => {
  test("輸入4，應輸出:8", () => {
    expect(Q5("4")).toBe(8);
  });
  test("輸入10，應輸出:160", () => {
    expect(Q5("10")).toBe(160);
  });
});

describe("測試 Q5 預期應拋出異常", () => {
  test("無輸入，應拋出異常", () => {
    expect(() => Q5("")).toThrow();
  });
  test("輸入空格，應拋出異常", () => {
    expect(() => Q5(" ")).toThrow();
  });
  test("輸入+0，應拋出異常", () => {
    expect(() => Q5("+0")).toThrow();
  });
  test("輸入-0，應拋出異常", () => {
    expect(() => Q5("-0")).toThrow();
  });
  test("輸入0.5，應拋出異常", () => {
    expect(() => Q5("0.5")).toThrow();
  });
  test("輸入-5，應拋出異常", () => {
    expect(() => Q5("-5")).toThrow();
  });
  test("輸入中文，應拋出異常", () => {
    expect(() => Q5("中文")).toThrow();
  });
  test("輸入english，應拋出異常", () => {
    expect(() => Q5("english")).toThrow();
  });
  test("輸入小於4的值，應拋出異常", () => {
    expect(() => Q5("1" || "2" || "3")).toThrow();
  });
  test("輸入非偶數的值，應拋出異常", () => {
    expect(() => Q5("5" || "7" || "9")).toThrow();
  });
});
