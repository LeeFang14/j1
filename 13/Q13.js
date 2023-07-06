export function Q13(rabbit, turtle, raceLength) {
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
  return `${fasterAnimal} 可以再偷懒 ${timeDifference} 秒`;
}

function calculateRaceTime(speed, raceLength, backSpeed) {
  const secondsPerMeter = Number((1 / speed).toFixed(2));
  let costTime = 0;
  let currentLocation = 0;
  while (currentLocation < raceLength) {
    costTime = Number((costTime + secondsPerMeter).toFixed(2));
    currentLocation++;
    if (costTime > 1 && costTime % 5 === 0) {
      costTime = Number((costTime + secondsPerMeter).toFixed(2));
      currentLocation = currentLocation - backSpeed;
      continue;
    }
  }
  return costTime;
}
