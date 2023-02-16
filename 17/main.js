// 17. 運用 Borda Count。算出下面的候選人分數。
// (第一順位得4分、第二順位得3分、第三順位得2分、第四順位得1分)

import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
const rl = readline.createInterface({ input, output });

function askQuestion() {
  rl.question("請輸入看電影人數: ", isPositiveInt);
}

askQuestion();
