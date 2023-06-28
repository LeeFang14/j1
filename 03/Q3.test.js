import { Q3 } from "./Q3.js";

describe("測試 Q3 預期應輸出", () => {
  test("輸入0，應輸出:票價: 200 元(半價)", () => {
    expect(Q3("0")).toBe("票價: 200 元(半價)");
  });
  test("輸入50，應輸出:票價: 400 元(原價)", () => {
    expect(Q3("50")).toBe("票價: 400 元(原價)");
  });
});

describe("測試 Q3 預期不應輸出", () => {
  test("輸入0，不應輸出:票價: 400 元(原價)", () => {
    expect(Q3("0")).not.toBe("票價: 400 元(原價)");
  });
  test("輸入50，不應輸出:票價: 200 元(半價)", () => {
    expect(Q3("50")).not.toBe("票價: 200 元(半價)");
  });
});

describe("測試 Q3 預期應拋出異常", () => {
  test("無輸入，應拋出異常", () => {
    expect(() => Q3("")).toThrow();
  });
  test("輸入空格，應拋出異常", () => {
    expect(() => Q3(" ")).toThrow();
  });
  test("輸入+0，應拋出異常", () => {
    expect(() => Q3("+0")).toThrow();
  });
  test("輸入-0，應拋出異常", () => {
    expect(() => Q3("-0")).toThrow();
  });
  test("輸入0.5，應拋出異常", () => {
    expect(() => Q3("0.5")).toThrow();
  });
  test("輸入-5，應拋出異常", () => {
    expect(() => Q3("-5")).toThrow();
  });
  test("輸入中文，應拋出異常", () => {
    expect(() => Q3("中文")).toThrow();
  });
  test("輸入english，應拋出異常", () => {
    expect(() => Q3("english")).toThrow();
  });
});
