import { Q2 } from "./Q2.js";

describe("測試 Q2 預期應輸出", () => {
  test("輸入[10,20]，應輸出:餘數不同", () => {
    expect(Q2(["10", "20"])).toBe("餘數不同");
  });
  test("輸入[10,10]，應輸出:餘數相同", () => {
    expect(Q2(["10", "10"])).toBe("餘數相同");
  });
});

describe("測試 Q2 預期不應輸出", () => {
  test("輸入:[10,20]，不應輸出:'餘數相同'", () => {
    expect(Q2(["10", "20"])).not.toBe("餘數相同");
  });
  test("輸入:[10,10]，不應輸出:'餘數不同'", () => {
    expect(Q2(["10", "10"])).not.toBe("餘數不同");
  });
});

describe("測試 Q2 預期應拋出異常", () => {
  test("無輸入，應拋出異常", () => {
    expect(() => Q2("")).toThrow();
  });
  test("輸入空格，應拋出異常", () => {
    expect(() => Q2(" ")).toThrow();
  });
  test("輸入+0，應拋出異常", () => {
    expect(() => Q2("+0")).toThrow();
  });
  test("輸入-0，應拋出異常", () => {
    expect(() => Q2("-0")).toThrow();
  });
  test("輸入0.5，應拋出異常", () => {
    expect(() => Q2("0.5")).toThrow();
  });
  test("輸入-5，應拋出異常", () => {
    expect(() => Q2("-0.5")).toThrow();
  });
  test("輸入中文，應拋出異常", () => {
    expect(() => Q2("中文")).toThrow();
  });
  test("輸入english，應拋出異常", () => {
    expect(() => Q2("english")).toThrow();
  });
});
