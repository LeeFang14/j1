import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import { isPositiveInteger } from "../modules/verify.js";

const rl = readline.createInterface({ input, output });

export function askQuestion(query, callback) {
  rl.question(query, (input) => {
    try {
      isPositiveInteger(input);
      const Verified = Number(input);
      callback(Verified);
      rl.close();
    } catch (error) {
      console.log(`${error.message}，請重新輸入`);
      askQuestion(query, callback);
    }
  });
}
