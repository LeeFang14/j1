// 13. 龜兔賽跑，兔子每秒可以跑20公尺，烏龜每秒跑0.28公尺，他們參加1000公尺競賽：
//     兔子故意用每跑5秒鐘後退1公尺的方式來挑釁烏龜，
//     請問兔子在途中還可以偷懶休息幾秒鐘再繼續跑並且贏得比賽 ?

import { Q13 } from "./Q13module.js";

function main() {
  class Player {
    constructor(name, speed, stepBack, stepBackSeconds) {
      this.name = name;
      this.speed = speed; // 每秒幾公尺
      this.stepBackSeconds = stepBackSeconds; // 每幾秒後退
      this.stepBack = stepBack; // 後退幾步
    }
  }
  const players = [
    new Player("烏龜", 0.28, 0, 0),
    new Player("兔子", 20, 1, 5),
  ];
  const raceLength = 1000;
  const result = Q13(players, raceLength);
  console.log(result);
}

main();
