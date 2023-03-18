// 3. 好想樂園的門票一張400元，優惠6歲(含)以下的孩童和65歲(含)以上的老人半價，
//    試用「比較運算子」寫一程式，讓使用者自行輸入年齡，並判斷門票價錢。
// age < 6 || age >= 65 半價：200元 ， else 400元

import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
const rl = readline.createInterface({ input, output });
import {
  isNumber,
  isPlusZero,
  isMinusZero,
  isInteger,
  isPositiveInt,
} from "../modules/verify.js";
import { getTicketPrice } from "./getTicketPrice.js";

function main() {
  rl.question("請輸入您的年齡: ", (input) => {
    try {
      isNumber(input);
      isPlusZero(input);
      isMinusZero(input);
      const UserAnswer = Number(input);
      isInteger(UserAnswer);
      isPositiveInt(UserAnswer);
      rl.close();
      const result = getTicketPrice(UserAnswer);
      console.log(result);
    } catch (error) {
      console.log(`${error.message}，請重新輸入`);
      main();
    }
  });
}

main();
