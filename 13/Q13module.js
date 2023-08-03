export function Q13(players, raceLength) {
  // 加上每個選手花費的時間
  players.forEach((item) => {
    return (item.costTime = calculateRaceTime(
      item.speed,
      item.stepBackSeconds,
      item.stepBack,
      raceLength
    ));
  });
  // 排序選手依花費時間從少到多
  console.log(players);
  players.sort((playersA, playersB) => playersA.costTime - playersB.costTime);
  const timeDifference = Number(
    players[1].costTime - players[0].costTime
  ).toFixed(2);
  return `${players[0].name} 可以再偷懒 ${timeDifference} 秒`;
}

function calculateRaceTime(speed, stepBackSeconds, stepBack, raceLength) {
  const secondsPerMeter = 1 / speed; // 每公尺幾秒：兔子每公尺0.05秒
  let currentPosition = 0; // 當前位置(公尺)
  let currentCostTime = 0; // 當前花費時間(秒)
  let originalCostTime = 0; // 正常跑的花費時間(for有特殊跑法的選手)

  while (currentPosition < raceLength) {
    // 總長度 - 當前位置 < 每一步的距離時，會換成每公尺花費幾秒的方式去計算
    if (raceLength - currentPosition < speed) {
      const toEndDistance = raceLength - currentPosition;
      currentPosition = currentPosition + toEndDistance;
      currentCostTime = currentCostTime + secondsPerMeter * toEndDistance;
      break;
    }

    currentPosition = currentPosition + speed;
    currentCostTime++;
    originalCostTime++;
    // 兔子的後退步數處理
    if (stepBack > 0 && originalCostTime % stepBackSeconds === 0) {
      currentPosition = currentPosition - stepBack;
      currentCostTime = currentCostTime + secondsPerMeter;
      continue;
    }
  }
  return currentCostTime;
}
