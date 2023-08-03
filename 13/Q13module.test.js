import { Q13 } from "./Q13module.js";

describe("Q13：龜兔賽跑，兔子每秒可以跑20公尺，烏龜每秒跑0.28公尺，他們參加1000公尺競賽：兔子故意用每跑5秒鐘後退1公尺的方式來挑釁烏龜，請問兔子在途中還可以偷懶休息幾秒鐘再繼續跑並且贏得比賽？", () => {
  test(`輸入"兔子、烏龜 的數據"，會輸出"兔子 可以再偷懒 3526.14 秒"`, () => {
    class Player {
      constructor(name, speed, stepBack, stepBackSeconds) {
        this.name = name;
        this.speed = speed; // 每秒幾公尺
        this.stepBackSeconds = stepBackSeconds; // 每幾秒後退
        this.stepBack = stepBack; // 後退幾步
      }
    }
    const players = [
      new Player("兔子", 20, 1, 5),
      new Player("烏龜", 0.28, 0, 0),
    ];
    const raceLength = 1000;
    expect(Q13(players, raceLength)).toBe("兔子 可以再偷懒 3520.43 秒");
  });
});

describe("測試 Q13 增加選手、不同速率的情況，兔子每秒可以跑20公尺，烏龜每秒跑0.28公尺，狗狗每秒跑50公尺(每10秒退後1步)。", () => {
  test(`輸入"狗狗、兔子、烏龜 的數據"，會輸出"狗狗 可以再偷懒 36.86 秒"`, () => {
    class Player {
      constructor(name, speed, stepBack, stepBackSeconds) {
        this.name = name;
        this.speed = speed; // 每秒幾公尺
        this.stepBackSeconds = stepBackSeconds; // 每幾秒後退
        this.stepBack = stepBack; // 後退幾步
      }
    }
    const players = [
      new Player("兔子", 20, 0, 0),
      new Player("烏龜", 0.28, 0, 0),
      new Player("狗狗", 50, 10, 1),
    ];
    const raceLength = 1500;
    expect(Q13(players, raceLength)).toBe("狗狗 可以再偷懒 36.86 秒");
  });
});
