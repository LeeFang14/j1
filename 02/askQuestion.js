import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import { isInteger } from "../modules/verify.js";

const rl = readline.createInterface({ input, output });

export function askQuestion(num, answers, callback) {
  rl.question(`第${num}個: `, (input) => {
    const questionTotal = 2;
    try {
      isInteger(input);
      answers.push(Number(input));
      if (num < questionTotal) {
        askQuestion(num + 1, answers, callback);
      } else {
        rl.close();
        callback(answers);
      }
    } catch (error) {
      console.log(`${error.message}，請重新輸入`);
      askQuestion(num, answers, callback);
    }
  });
}
