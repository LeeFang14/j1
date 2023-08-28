export function Q17(votingList) {
  const candidateMap = new Map();

  votingList.forEach((voting) => {
    voting.order.forEach((candidate, candidateIndex) => {
      const orderLength = voting.order.length;
      const eachScore = voting.votes * (orderLength - candidateIndex);

      if (candidateMap.has(candidate)) {
        candidateMap.get(candidate).push(eachScore);
      } else {
        candidateMap.set(candidate, [eachScore]);
      }
    });
  });

  const candidateList = Array.from(candidateMap, ([name, scores]) => ({
    name: name,
    eachScore: scores,
  }));

  candidateList.forEach((candidate) => {
    return (candidate.totalScore = candidate.eachScore.reduce(sumScore, 0));
  });

  return candidateList
    .map((candidate) => {
      const eachScore = candidate.eachScore.join("分+");
      return `候選人「${candidate.name}」每個順位分數:${eachScore}分=總得分數${candidate.totalScore}分`;
    })
    .join("\n");
}

function sumScore(accumulator, currentValue) {
  return accumulator + currentValue;
}
