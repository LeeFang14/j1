export function Q17(originalScore, candidateList) {
  // 計算每一輪投票的分數
  candidateList.forEach((item) => {
    return (item.rankingOrder = filterOrder(originalScore, item.name));
  });

  const rankingScoringCriteria = calculateRankingScoringCriteria(originalScore);
  const votesPerRound = filterVotes(originalScore, 0);

  // 計算每一輪投票的分數;
  candidateList.forEach((item) => {
    return (item.eachScore = calculateEachScore(
      item.rankingOrder,
      rankingScoringCriteria,
      votesPerRound
    ));
  });

  // 加總總票數
  candidateList.forEach((item) => {
    return (item.totalScore = item.eachScore.reduce(sumScore, 0));
  });

  return candidateList
    .map((item) => {
      const eachScore = item.eachScore.join("分+");
      return ` ${item.name} 號候選人的每輪分數:${eachScore}分=總得分數${item.totalScore}分`;
    })
    .join("\n");
}

// 取原始資料中每位候選人的得票名次
function filterOrder(originalScore, candidate) {
  return originalScore.map((subArr) => {
    return subArr.findIndex((item) => item === candidate);
  });
}

// 取原始資料中的票數
function filterVotes(originalScore, number) {
  return originalScore.map((subArr) => subArr[number]);
}

// 取原始資料中的人數去生成排名評分標準
function calculateRankingScoringCriteria(originalScore) {
  const rankingScoringCriteria = [];
  for (let i = originalScore[0].length - 1; i > 0; i--) {
    rankingScoringCriteria.push(i);
  }
  return rankingScoringCriteria;
}

function calculateEachScore(
  rankingOrder,
  rankingScoringCriteria,
  votesPerRound
) {
  return rankingOrder.map((item, index) => {
    const score =
      item * rankingScoringCriteria[item - 1] * votesPerRound[index];
    return score;
  });
}

function sumScore(accumulator, currentValue) {
  return accumulator + currentValue;
}
