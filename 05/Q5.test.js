import { Q5 } from "./Q5.js";

describe("測試 Q5 會輸出", () => {
  test(`輸入"4"，會輸出"總和: 8"`, () => {
    expect(Q5("4")).toBe("總和: 8");
  });
  test(`輸入"10"，會輸出"總和: 160"`, () => {
    expect(Q5("10")).toBe("總和: 160");
  });
});

describe("測試 Q5 會拋出異常", () => {
  test("無輸入", () => {
    expect(() => Q5("")).toThrow();
  });
  test("輸入空格", () => {
    expect(() => Q5(" ")).toThrow();
  });
  test("輸入+0", () => {
    expect(() => Q5("+0")).toThrow();
  });
  test("輸入-0", () => {
    expect(() => Q5("-0")).toThrow();
  });
  test("輸入0.5", () => {
    expect(() => Q5("0.5")).toThrow();
  });
  test("輸入-5", () => {
    expect(() => Q5("-5")).toThrow();
  });
  test("輸入中文", () => {
    expect(() => Q5("中文")).toThrow();
  });
  test("輸入english", () => {
    expect(() => Q5("english")).toThrow();
  });
  test("輸入小於4的值", () => {
    expect(() => Q5("1" || "2" || "3")).toThrow();
  });
  test("輸入非偶數的值", () => {
    expect(() => Q5("5" || "7" || "9")).toThrow();
  });
});
