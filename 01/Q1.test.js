import { Q1 } from "./Q1.js";

describe("測試 Q1 預期應輸出", () => {
  test("輸入10，應輸出:照常播放電影", () => {
    expect(Q1("10")).toBe("照常播放電影");
  });
  test("輸入0，應輸出:不播放電影", () => {
    expect(Q1("0")).toBe("不播放電影");
  });
});

describe("測試 Q1 預期不應輸出", () => {
  test("輸入10，不應輸出:不播放電影", () => {
    expect(Q1("10")).not.toBe("不播放電影");
  });
  test("輸入0，不應輸出:照常播放電影", () => {
    expect(Q1("0")).not.toBe("照常播放電影");
  });
});

describe("測試 Q1 預期應拋出異常", () => {
  test("無輸入，應拋出異常", () => {
    expect(() => Q1("")).toThrow();
  });
  test("輸入空格，應拋出異常", () => {
    expect(() => Q1(" ")).toThrow();
  });
  test("輸入+0，應拋出異常", () => {
    expect(() => Q1("+0")).toThrow();
  });
  test("輸入-0，應拋出異常", () => {
    expect(() => Q1("-0")).toThrow();
  });
  test("輸入0.5，應拋出異常", () => {
    expect(() => Q1("0.5")).toThrow();
  });
  test("輸入-5，應拋出異常", () => {
    expect(() => Q1("-5")).toThrow();
  });
  test("輸入中文，應拋出異常", () => {
    expect(() => Q1("中文")).toThrow();
  });
  test("輸入english，應拋出異常", () => {
    expect(() => Q1("english")).toThrow();
  });
});
