// 3. 好想樂園的門票一張400元，優惠6歲(含)以下的孩童和65歲(含)以上的老人半價，
//    試用「比較運算子」寫一程式，讓使用者自行輸入年齡，並判斷門票價錢。
// age < 6 || age >= 65 半價：200元 ， else 400元

import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
const rl = readline.createInterface({ input, output });
import {
  isNumber,
  isInteger,
  isPositiveInt,
  isPlusZero,
  isMinusZero,
} from "../modules/verify.js";

function getUserInput() {
  rl.question("請輸入您的年齡: ", main);
}

function main(input) {
  try {
    isNumber(input);
    isPlusZero(input);
    isMinusZero(input);
    const UserAnswer = Number(input);
    isInteger(UserAnswer);
    isPositiveInt(UserAnswer);
    const result =
      UserAnswer > 6 && UserAnswer < 65
        ? "票價: 400元(全票)"
        : "票價: 200元(半票)";
    console.log(result);
    rl.close();
  } catch (error) {
    console.log(`${error.message}，請重新輸入`);
    getUserInput();
  }
}

getUserInput();
