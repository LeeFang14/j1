// 4. 輸入 n 印出 1+2-3+4-5+6-7...n 的算式與總和

import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import {
  isNumber,
  isInteger,
  isPositiveInt,
  isPlusZero,
  isMinusZero,
} from "../modules/verify.js";
import {
  generateSequence,
  generateFormula,
  calculateSum,
} from "./calculate.js";
const rl = readline.createInterface({ input, output });

function main() {
  rl.question("請輸入一個正整數: ", (input) => {
    try {
      isNumber(input);
      isPlusZero(input);
      isMinusZero(input);
      input = Number(input);
      isInteger(input);
      isPositiveInt(input);
      rl.close();
      const numArr = generateSequence(input);
      const formulaStr = generateFormula(numArr);
      console.log("算式:", formulaStr);
      const result = calculateSum(numArr);
      console.log("總和:", result);
    } catch (error) {
      console.log(`${error.message}，請重新輸入`);
      main();
    }
  });
}
main();
