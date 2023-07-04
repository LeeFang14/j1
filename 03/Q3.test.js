import { Q3 } from "./Q3.js";

describe("測試 Q3 會輸出", () => {
  test(`輸入"0"，會輸出"票價: 200 元(半價)"`, () => {
    expect(Q3("0")).toBe("票價: 200 元(半價)");
  });
  test(`輸入"50"，會輸出"票價: 400 元(原價)"`, () => {
    expect(Q3("50")).toBe("票價: 400 元(原價)");
  });
});

describe("測試 Q3 不會輸出", () => {
  test(`輸入"0"，不會輸出"票價: 400 元(原價)"`, () => {
    expect(Q3("0")).not.toBe("票價: 400 元(原價)");
  });
  test(`輸入"50"，不會輸出"票價: 200 元(半價)"`, () => {
    expect(Q3("50")).not.toBe("票價: 200 元(半價)");
  });
});

describe("測試 Q3 會拋出異常", () => {
  test("無輸入", () => {
    expect(() => Q3("")).toThrow();
  });
  test("輸入空格", () => {
    expect(() => Q3(" ")).toThrow();
  });
  test("輸入+0", () => {
    expect(() => Q3("+0")).toThrow();
  });
  test("輸入-0", () => {
    expect(() => Q3("-0")).toThrow();
  });
  test("輸入0.5", () => {
    expect(() => Q3("0.5")).toThrow();
  });
  test("輸入-5", () => {
    expect(() => Q3("-5")).toThrow();
  });
  test("輸入中文", () => {
    expect(() => Q3("中文")).toThrow();
  });
  test("輸入english", () => {
    expect(() => Q3("english")).toThrow();
  });
});
