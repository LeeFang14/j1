// 17. 運用 Borda Count。算出下面的候選人分數。
// (第一順位得4分、第二順位得3分、第三順位得2分、第四順位得1分)
//   #     51票   5票   23票  21票
// 第1順位    1     3     2     4
// 第2順位    3     2     3     3
// 第3順位    2     4     4     2
// 第4順位    4     1     1     1

// 先把上面的原始資料寫成陣列後，
// const originalScore = [
//   [51, 1, 3, 2, 4],
//   [5, 3, 2, 4, 1],
//   [23, 2, 3, 4, 1],
//   [21, 4, 3, 2, 1],
// ];
// mapping成下面的資料，再去作後續處理：
// candidateList = [
//   { candidateNumber: 1, orderResult: [1, 4, 4, 4], score: number },
//   { candidateNumber: 2, orderResult: [3, 2, 1, 3], score: number },
//   { candidateNumber: 3, orderResult: [2, 1, 2, 2], score: number },
//   { candidateNumber: 4, orderResult: [4, 3, 3, 1], score: number },
// ];

import { Q17 } from "./Q17module.js";

function main() {
  // 原始資料：每輪票數與順位，index剛好是投票名次。
  const originalScore = [
    [51, 1, 3, 2, 4],
    [5, 3, 2, 4, 1],
    [23, 2, 3, 4, 1],
    [21, 4, 3, 2, 1],
  ];

  class Candidate {
    constructor(name) {
      this.name = name;
    }
  }

  const candidateList = [
    new Candidate(1),
    new Candidate(2),
    new Candidate(3),
    new Candidate(4),
  ];

  const result = Q17(originalScore, candidateList);
  console.log(result);
}

main();
