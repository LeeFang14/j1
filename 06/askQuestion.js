import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import { isEnglish } from "../modules/verify.js";

const rl = readline.createInterface({ input, output });

function askQuestion(num, answers, callback) {
  rl.question(`第${num}個: `, (input) => {
    try {
      isEnglish(input);
      answers.push(input);
      if (num < 4) {
        askQuestion(num + 1, answers, callback);
      } else {
        callback(answers);
        rl.close();
      }
    } catch (error) {
      console.log(`${error.message}，請重新輸入`);
      askQuestion(num, answers, callback);
    }
  });
}

export { askQuestion };
