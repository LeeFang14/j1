export function random(sportList, maxWeight) {
  const sport = [0, 0, 0];
  let totalWeight = 0;

  while (totalWeight < maxWeight) {
    const randomIndex = Math.floor(Math.random() * sportList.length);
    const moveWeight = sportList[randomIndex].weight;
    if (totalWeight + moveWeight > maxWeight) {
      break;
    }
    sport[randomIndex]++;
    totalWeight += moveWeight;
  }

  return { sport, totalWeight };
}
