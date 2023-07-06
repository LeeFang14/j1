export function Q15(sportList, weightLimit) {
  const sport = [0, 0, 0];
  let currentWeight = 0;
  while (currentWeight < weightLimit) {
    const randomIndex = Math.floor(Math.random() * sportList.length);
    const moveWeight = sportList[randomIndex].weight;
    if (currentWeight + moveWeight > weightLimit) {
      break;
    }
    sport[randomIndex]++;
    currentWeight += moveWeight;
  }

  const result = sportList
    .map(({ toolName, unit }, index) => {
      return `${toolName}: ${sport[index]} ${unit}`;
    })
    .join(",");
  return `${result},總重 ${currentWeight} KG`;
}
