// 2. 使用者輸入兩個整數，將它們分別除以 3，判斷餘數是否相同，
//    若相同，則於螢幕上顯示「餘數相同」。
// first % 3 === second % 3

import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
const rl = readline.createInterface({ input, output });
import { isNumber, isPlusZero, isMinusZero } from "../modules/verify.js";

function main() {
  let q1;
  let q2;
  rl.question("請輸入第一個數字: ", (answerOne) => {
    try {
      isNumber(answerOne);
      isPlusZero(answerOne);
      isMinusZero(answerOne);
      q1 = answerOne;
      q2();
      function q2() {
        rl.question("請輸入第二個數字: ", (answerTwo) => {
          try {
            isNumber(answerTwo);
            isPlusZero(answerTwo);
            isMinusZero(answerTwo);
            rl.close();
            const first = answerOne % 3;
            const second = answerTwo % 3;
            const result = first === second ? "餘數相同" : "餘數不同";
            console.log(result);
          } catch (error) {
            console.log(`${error.message}，請重新輸入`);
            q2();
          }
        });
      }
    } catch (error) {
      console.log(`${error.message}，請重新輸入`);
      main();
    }
  });
}

main();
