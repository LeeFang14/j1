// 5. 寫一個遞迴函數 function umleven(n)
// 來求算 2 * 4 + 4 * 6 + 6 * 8...+ (n - 2) * n
// (n最小為 4, 只會出現偶數)

import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
const rl = readline.createInterface({ input, output });
import { isNumber, isOverFour, isEven } from "../modules/verify.js";
import { umlEven, calculateSum } from "./calculate.js";

function main() {
  rl.question("請輸入包含4以上的正偶數: ", (input) => {
    try {
      isNumber(input);
      const UserAnswer = Number(input);
      isOverFour(UserAnswer);
      isEven(UserAnswer);
      rl.close();
      const umlEvenArr = umlEven(UserAnswer).reverse();
      const result = calculateSum(umlEvenArr);
      console.log(result);
    } catch (error) {
      console.log(`${error.message}，請重新輸入`);
      main();
    }
  });
}
main();
