import { Q13 } from "./Q13.js";

describe("測試 Q13 會輸出", () => {
  test(`輸入"兔子和烏龜的數據"，會輸出"兔子 可以再偷懒 3526.14 秒"`, () => {
    const raceLength = 1000;
    const rabbit = {
      speed: 20,
      backSpeed: 1,
      costTime: 0,
    };
    const turtle = {
      speed: 0.28,
      backSpeed: 0,
      costTime: 0,
    };
    expect(Q13(rabbit, turtle, raceLength)).toBe("兔子 可以再偷懒 3526.14 秒");
  });
});
