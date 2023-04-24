import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import { isPositiveInteger } from "../modules/verify.js";

const rl = readline.createInterface({ input, output });

export function askQuestion(callback) {
  rl.question("請輸入一個正整數: ", (input) => {
    try {
      isPositiveInteger(input);
      rl.close();
      callback(Number(input));
    } catch (error) {
      console.log(`${error.message}，請重新輸入`);
      askQuestion(callback);
    }
  });
}
