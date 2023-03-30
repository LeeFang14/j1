// 2. 使用者輸入兩個整數，將它們分別除以 3，判斷餘數是否相同，
//    若相同，則於螢幕上顯示「餘數相同」。

import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import {
  isNumber,
  isPlusZero,
  isMinusZero,
  isInteger,
} from "../modules/verify.js";
import { isModEqualArray } from "./isModEqual2.js";
const rl = readline.createInterface({ input, output });

function main() {
  function getAnswer(num, answers, callback) {
    rl.question(`請輸入2個整數，第${num}個: `, (answer) => {
      try {
        isNumber(answer);
        isPlusZero(answer);
        isMinusZero(answer);
        answer = Number(answer);
        isInteger(answer);
        answers.push(answer);
        if (num < 2) {
          getAnswer(num + 1, answers, callback);
        } else {
          callback(answers);
          rl.close();
        }
      } catch (error) {
        console.log(`${error.message}，請重新輸入`);
        getAnswer(num, answers, callback);
      }
    });
  }

  function callback(answers) {
    const result = isModEqualArray(answers);
    console.log(result);
  }

  getAnswer(1, [], callback);
}

main();
