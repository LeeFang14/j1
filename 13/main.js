// 13. 龜兔賽跑，兔子每秒可以跑20公尺，烏龜每秒跑0.28公尺，他們參加1000公尺競賽：
//     兔子故意用每跑5秒鐘後退1公尺的方式來挑釁烏龜，
//     請問兔子在途中還可以偷懶休息幾秒鐘再繼續跑並且贏得比賽 ?

// 1. 先算出1公尺需幾秒
// 2. 算出1000公尺需要幾秒
// 2. 兔子倒退的那1公尺，需要再加上倒退的時間。
// 3. 結果：取得相減值(絕對值不用管誰減誰)，判斷少的(快)為結果印出。

import { calculateRaceTime } from "./calculateRaceTime.js";

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

  rabbit.costTime = calculateRaceTime(
    rabbit.speed,
    raceLength,
    rabbit.backSpeed
  );
  turtle.costTime = calculateRaceTime(
    turtle.speed,
    raceLength,
    turtle.backSpeed
  );
  const timeDifference = Math.abs(rabbit.costTime - turtle.costTime).toFixed(2);
  const fasterAnimal = rabbit.costTime < turtle.costTime ? "兔子" : "烏龜";
  const message = `${fasterAnimal} 可以再偷懒 ${timeDifference} 秒`;
  console.log(message);
}

main();
