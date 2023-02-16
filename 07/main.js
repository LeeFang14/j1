// 7. 印出下圖，並轉 90°
/*
  ** ** 
 ******* 
*********
*********
 *******
  *****
   ***
    *

*/

import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
const rl = readline.createInterface({ input, output });

function askQuestion() {
  rl.question("請輸入看電影人數: ", isPositiveInt);
  console.log(jonas);
}

askQuestion();
