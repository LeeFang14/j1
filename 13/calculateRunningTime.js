export function calculateRunningTime(eachMeter, length, backwards = 0) {
  let second = 0;
  let longRange = 0;
  while (longRange < length) {
    if (second > 1 && second % backwards === 0) {
      longRange = longRange + eachMeter - 1;
      second++;
      continue;
    }
    longRange += eachMeter;
    second++;
  }
  return second;
}
