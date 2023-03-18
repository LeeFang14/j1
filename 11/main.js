// 11. 好想健身房新開幕，每期會費500元，第一期79折，每滿五期再折200元，請讓使用者自行輸入所需期數，並利用do while計算，印出總費用。

import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
const rl = readline.createInterface({ input, output });

function main() {
  rl.question("question? ", (answer) => {
    console.log(answer);
    rl.close();
  });
}

main();
