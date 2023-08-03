import { Q2 } from "./Q2module.js";

describe("Q2：使用者輸入兩個整數，將它們分別除以3，判斷餘數是否相同，若相同，則於螢幕上顯示「餘數相同」。", () => {
  test(`輸入"10,20"，輸出"餘數不同"`, () => {
    expect(Q2(["10", "20"])).toBe("餘數不同");
  });
  test(`輸入"10,10"，輸出"餘數相同"`, () => {
    expect(Q2(["10", "10"])).toBe("餘數相同");
  });
});

describe("測試 Q2 不會輸出", () => {
  test(`輸入"10,20"，不會輸出"餘數相同"`, () => {
    expect(Q2(["10", "20"])).not.toBe("餘數相同");
  });
  test(`輸入"10,10"，不會輸出"餘數不同"`, () => {
    expect(Q2(["10", "10"])).not.toBe("餘數不同");
  });
});

describe("測試 Q2 以下都會拋出異常", () => {
  test("無輸入", () => {
    expect(() => Q2("")).toThrow();
  });
  test("輸入空格", () => {
    expect(() => Q2(" ")).toThrow();
  });
  test("輸入+0", () => {
    expect(() => Q2("+0")).toThrow();
  });
  test("輸入-0", () => {
    expect(() => Q2("-0")).toThrow();
  });
  test("輸入0.5", () => {
    expect(() => Q2("0.5")).toThrow();
  });
  test("輸入-5", () => {
    expect(() => Q2("-0.5")).toThrow();
  });
  test("輸入中文", () => {
    expect(() => Q2("中文")).toThrow();
  });
  test("輸入english", () => {
    expect(() => Q2("english")).toThrow();
  });
});
