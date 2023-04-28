import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import { isPositiveInteger } from "../modules/verify.js";

const rl = readline.createInterface({ input, output });

export function askQuestion(query, printResult) {
  rl.question(query, (input) => {
    try {
      isPositiveInteger(input);
      const verified = Number(input);
      printResult(verified);
      rl.close();
    } catch (error) {
      console.log(`${error.message}，請重新輸入`);
      askQuestion(query, printResult);
    }
  });
}
