import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import { isPositiveInteger } from "../modules/verify.js";

const rl = readline.createInterface({ input, output });

// 請輸入一個正整數
export function askQuestion(question, printResult) {
  rl.question(question, (input) => {
    try {
      isPositiveInteger(input);
      rl.close();
      printResult(Number(input));
    } catch (error) {
      console.log(`${error.message}，請重新輸入`);
      askQuestion(question, printResult);
    }
  });
}
