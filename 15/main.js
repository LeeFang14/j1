// 15. 有一輛搬運車，限重1噸 (不能超重)，啞鈴每箱重30kg，單槓每箱重20kg，跑步機一台重50kg，
//     在不將空間列入考慮的情況下，設一陣列 sport[3] 用來儲存三種器材的數量，
//     以一亂數決定每次要搬到車上的器材為何，當超過限重時即停止搬運，並列印出三種器材的個數及總重量。

import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
const rl = readline.createInterface({ input, output });

function askQuestion() {
  rl.question("請輸入看電影人數: ", isPositiveInt);
}

askQuestion();
