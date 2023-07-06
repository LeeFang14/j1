// 13. 龜兔賽跑，兔子每秒可以跑20公尺，烏龜每秒跑0.28公尺，他們參加1000公尺競賽：
//     兔子故意用每跑5秒鐘後退1公尺的方式來挑釁烏龜，
//     請問兔子在途中還可以偷懶休息幾秒鐘再繼續跑並且贏得比賽 ?

import { Q13 } from "./Q13.js";

function main() {
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

  const result = Q13(rabbit, turtle, raceLength);
  console.log(result);
}

main();
