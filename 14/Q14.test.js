import { Q14 } from "./Q14.js";

describe("測試 Q14 會輸出", () => {
  test(`輸入"10"，會輸出"細菌目前有 1 隻，在 10 分鐘後，細菌有 1 隻。"`, () => {
    expect(Q14("10")).toBe("細菌目前有 1 隻，在 10 分鐘後，細菌有 1 隻。");
  });
  test(`輸入"20"，會輸出"細菌目前有 1 隻，在 20 分鐘後，細菌有 1 隻。"`, () => {
    expect(Q14("20")).toBe("細菌目前有 1 隻，在 20 分鐘後，細菌有 2 隻。");
  });
  test(`輸入"30"，會輸出"細菌目前有 1 隻，在 30 分鐘後，細菌有 1 隻。"`, () => {
    expect(Q14("30")).toBe("細菌目前有 1 隻，在 30 分鐘後，細菌有 2 隻。");
  });
  test(`輸入"40"，會輸出"細菌目前有 1 隻，在 40 分鐘後，細菌有 1 隻。"`, () => {
    expect(Q14("40")).toBe("細菌目前有 1 隻，在 40 分鐘後，細菌有 4 隻。");
  });
  test(`輸入"50"，會輸出"細菌目前有 1 隻，在 50 分鐘後，細菌有 1 隻。"`, () => {
    expect(Q14("50")).toBe("細菌目前有 1 隻，在 50 分鐘後，細菌有 4 隻。");
  });
  test(`輸入"60"，會輸出"細菌目前有 1 隻，在 60 分鐘後，細菌有 1 隻。"`, () => {
    expect(Q14("60")).toBe("細菌目前有 1 隻，在 60 分鐘後，細菌有 8 隻。");
  });
});

describe("測試 Q14 會拋出異常", () => {
  test("無輸入", () => {
    expect(() => Q14("")).toThrow();
  });
  test("輸入空格", () => {
    expect(() => Q14(" ")).toThrow();
  });
  test("輸入+0", () => {
    expect(() => Q14("+0")).toThrow();
  });
  test("輸入-0", () => {
    expect(() => Q14("-0")).toThrow();
  });
  test("輸入0.5", () => {
    expect(() => Q14("0.5")).toThrow();
  });
  test("輸入-5", () => {
    expect(() => Q14("-5")).toThrow();
  });
  test("輸入中文", () => {
    expect(() => Q14("中文")).toThrow();
  });
  test("輸入english", () => {
    expect(() => Q14("english")).toThrow();
  });
});
