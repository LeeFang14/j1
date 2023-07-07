// 17. 運用 Borda Count。算出下面的候選人分數。
// (第一順位得4分、第二順位得3分、第三順位得2分、第四順位得1分)
//   #     51票   5票   23票  21票
// 第1順位    1     3    2     4
// 第2順位    3     2    3     3
// 第3順位    2     4    4     2
// 第4順位    4     1    1     1
import { Q17 } from "./Q17.js";

function main() {
  const candidateList = [
    { candidateNumber: 1, orderResult: [1, 4, 4, 4] },
    { candidateNumber: 2, orderResult: [3, 2, 1, 3] },
    { candidateNumber: 3, orderResult: [2, 1, 2, 2] },
    { candidateNumber: 4, orderResult: [4, 3, 3, 1] },
  ];
  const votesPerRound = [51, 5, 23, 21];
  const result = Q17(candidateList, votesPerRound);
  console.log(result);
}

main();
