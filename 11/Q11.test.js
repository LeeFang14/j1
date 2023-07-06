import { Q11 } from "./Q11.js";

describe("測試 Q11 會輸出", () => {
  test(`輸入"5"，會輸出"共 5 期，總金額: 2195 元"`, () => {
    expect(Q11("5")).toBe("共 5 期，總金額: 2195 元");
  });
  test(`輸入"10"，會輸出"共 10 期，總金額: 4495 元"`, () => {
    expect(Q11("10")).toBe("共 10 期，總金額: 4495 元");
  });
});

describe("測試 Q11 會拋出異常", () => {
  test("無輸入", () => {
    expect(() => Q11("")).toThrow();
  });
  test("輸入空格", () => {
    expect(() => Q11(" ")).toThrow();
  });
  test("輸入+0", () => {
    expect(() => Q11("+0")).toThrow();
  });
  test("輸入-0", () => {
    expect(() => Q11("-0")).toThrow();
  });
  test("輸入0.5", () => {
    expect(() => Q11("0.5")).toThrow();
  });
  test("輸入-5", () => {
    expect(() => Q11("-5")).toThrow();
  });
  test("輸入中文", () => {
    expect(() => Q11("中文")).toThrow();
  });
  test("輸入english", () => {
    expect(() => Q11("english")).toThrow();
  });
});
