// 16. 運用Caesar cipher: 明文中的所有字母加密，自訂一個平移參數。
//     讓使用者輸入 5 個字母，字每向後平移 3 個數，印出加密結果

import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
const rl = readline.createInterface({ input, output });

function askQuestion() {
  rl.question("請輸入看電影人數: ", isPositiveInt);
}

askQuestion();
