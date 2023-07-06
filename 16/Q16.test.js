import { Q16 } from "./Q16.js";

describe("測試 Q16 會輸出", () => {
  test(`輸入"aaaaa"，會輸出"加密結果: ddddd"`, () => {
    expect(Q16("aaaaa")).toBe("加密結果: ddddd");
  });
  test(`輸入"AAAAA"，會輸出"加密結果: DDDDD"`, () => {
    expect(Q16("AAAAA")).toBe("加密結果: DDDDD");
  });
  test(`輸入"zzzzz"，會輸出"加密結果: ccccc"`, () => {
    expect(Q16("zzzzz")).toBe("加密結果: ccccc");
  });
  test(`輸入"ZZZZZ"，會輸出"加密結果: CCCCC"`, () => {
    expect(Q16("ZZZZZ")).toBe("加密結果: CCCCC");
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
  test("輸入不足5位數的值", () => {
    expect(() => Q5("aaaa")).toThrow();
  });
  test("輸入超過5位數的值", () => {
    expect(() => Q5("aaaaaa")).toThrow();
  });
});
