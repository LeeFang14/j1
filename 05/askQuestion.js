import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import { validateInput } from "./validateInput.js";

const rl = readline.createInterface({ input, output });

export function askQuestion(callback) {
  rl.question("請輸入包含4以上的正偶數: ", (input) => {
    try {
      validateInput(input);
      rl.close();
      callback(Number(input));
    } catch (error) {
      console.log(`${error.message}，請重新輸入`);
      askQuestion(callback);
    }
  });
}
