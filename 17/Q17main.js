// 17. 運用 Borda Count。算出下面的候選人分數。
// (第一順位得4分、第二順位得3分、第三順位得2分、第四順位得1分)
//   #     51票   5票   23票  21票
// 第1順位    1     3     2     4
// 第2順位    3     2     3     3
// 第3順位    2     4     4     2
// 第4順位    4     1     1     1

import { Q17 } from "./Q17module.js";

function main() {
  const originalVoting = [
    { votes: 51, order: [1, 3, 2, 4] },
    { votes: 5, order: [3, 2, 4, 1] },
    { votes: 23, order: [2, 3, 4, 1] },
    { votes: 21, order: [4, 3, 2, 1] },
  ];
  const result = Q17(originalVoting);
  console.log(result);
}

main();
