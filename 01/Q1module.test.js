import { Q1 } from "./Q1module.js";

describe("Q1：好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影，讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」。", () => {
  test(`輸入"10"，會輸出"照常播放電影"`, () => {
    expect(Q1("10")).toBe("照常播放電影");
  });
  test(`輸入"0"會輸出"不播放電影"`, () => {
    expect(Q1("0")).toBe("不播放電影");
  });
});

describe("測試 Q1 不會輸出", () => {
  test(`輸入"10"，不會輸出"不播放電影"`, () => {
    expect(Q1("10")).not.toBe("不播放電影");
  });
  test(`輸入"0"，不會輸出"照常播放電影"`, () => {
    expect(Q1("0")).not.toBe("照常播放電影");
  });
});

describe("測試 Q1 以下都會拋出異常", () => {
  test("無輸入", () => {
    expect(() => Q1("")).toThrow();
  });
  test("輸入空格", () => {
    expect(() => Q1(" ")).toThrow();
  });
  test("輸入+0", () => {
    expect(() => Q1("+0")).toThrow();
  });
  test("輸入-0", () => {
    expect(() => Q1("-0")).toThrow();
  });
  test("輸入0.5", () => {
    expect(() => Q1("0.5")).toThrow();
  });
  test("輸入-5", () => {
    expect(() => Q1("-5")).toThrow();
  });
  test("輸入中文", () => {
    expect(() => Q1("中文")).toThrow();
  });
  test("輸入english", () => {
    expect(() => Q1("english")).toThrow();
  });
});
