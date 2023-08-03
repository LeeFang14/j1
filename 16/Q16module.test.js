import { Q16 } from "./Q16module.js";

describe("Q16：運用 Caesar cipher: 明文中的所有字母加密，自訂一個平移參數。讓使用者輸入 5 個字母，字每向後平移 3 個數，印出加密結果。", () => {
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
  test(`輸入"AzAZa"，會輸出"加密結果: DcDCd"`, () => {
    expect(Q16("AzAZa")).toBe("加密結果: DcDCd");
  });
});

describe("測試 Q16 以下都會拋出異常", () => {
  test("無輸入", () => {
    expect(() => Q16("")).toThrow();
  });
  test("輸入空格", () => {
    expect(() => Q16(" ")).toThrow();
  });
  test("輸入+0", () => {
    expect(() => Q16("+0")).toThrow();
  });
  test("輸入-0", () => {
    expect(() => Q16("-0")).toThrow();
  });
  test("輸入0.5", () => {
    expect(() => Q16("0.5")).toThrow();
  });
  test("輸入-5", () => {
    expect(() => Q16("-5")).toThrow();
  });
  test("輸入中文", () => {
    expect(() => Q16("中文")).toThrow();
  });
  test("輸入english", () => {
    expect(() => Q16("english")).toThrow();
  });
  test("輸入不足5位數的值", () => {
    expect(() => Q16("aaaa")).toThrow();
  });
  test("輸入超過5位數的值", () => {
    expect(() => Q16("aaaaaa")).toThrow();
  });
});
