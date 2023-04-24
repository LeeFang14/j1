import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import { isPositiveInteger } from "../modules/verify.js";

const rl = readline.createInterface({ input, output });

function askQuestion(question, callback) {
  rl.question(question, (input) => {
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

export { askQuestion };
