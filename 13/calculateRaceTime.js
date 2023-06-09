export function calculateRaceTime(speed, raceLength, backSpeed) {
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
