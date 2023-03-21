// 3. 好想樂園的門票一張400元，優惠6歲(含)以下的孩童和65歲(含)以上的老人半價，
//    試用「比較運算子」寫一程式，讓使用者自行輸入年齡，並判斷門票價錢。

import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import {
  isNumber,
  isPlusZero,
  isMinusZero,
  isInteger,
  isPositiveInt,
} from "../modules/verify.js";
import { getTicketPrice } from "./getTicketPrice.js";
const rl = readline.createInterface({ input, output });

function main() {
  console.log(
    "好想樂園的門票一張400元，優惠6歲(含)以下的孩童和65歲(含)以上的老人半價"
  );
  askQuestion();
  function askQuestion() {
    rl.question("請輸入您的年齡: ", (input) => {
      try {
        isNumber(input);
        isPlusZero(input);
        isMinusZero(input);
        input = Number(input);
        isInteger(input);
        isPositiveInt(input);
        rl.close();
        const result = getTicketPrice(input);
        console.log(result);
      } catch (error) {
        console.log(`${error.message}，請重新輸入`);
        askQuestion();
      }
    });
  }
}

main();
