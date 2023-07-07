export function Q17(candidateList, votesPerRound) {
  const eachCandidateScore = candidateList.map((obj) => {
    return obj.orderResult
      .map((ranking, index) => {
        return getRankingPoints(ranking) * votesPerRound[index];
      })
      .reduce(sumScore, 0);
  });
  return eachCandidateScore
    .map((totalScore, index) => {
      return `${candidateList[index].candidateNumber}號候選人得票分數: ${totalScore} 分`;
    })
    .join("\n");
}

function getRankingPoints(ranking) {
  switch (ranking) {
    case 1:
      return 4;
    case 2:
      return 3;
    case 3:
      return 2;
    case 4:
      return 1;
  }
}

function sumScore(accumulator, currentValue) {
  return accumulator + currentValue;
}
