// 13. 龜兔賽跑，兔子每秒可以跑20公尺，烏龜每秒跑0.28公尺，他們參加1000公尺競賽：
//     兔子故意用每跑5秒鐘後退1公尺的方式來挑釁烏龜，
//     請問兔子在途中還可以偷懶休息幾秒鐘再繼續跑並且贏得比賽 ?
import { calculateRunningTime } from "./calculateRunningTime.js";

function main() {
  const length = 1000;
  const rabbitEachMeter = 20;
  const turtleEachMeter = 0.28;
  const rabbitRunningTime = calculateRunningTime(rabbitEachMeter, length, 5);
  const turtleRunningTime = calculateRunningTime(turtleEachMeter, length);
  const result = turtleRunningTime - rabbitRunningTime;
  console.log(`兔子可以再偷懶${result}秒`);
}

main();
