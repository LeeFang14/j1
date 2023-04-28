import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import { isEnglish } from "../modules/verify.js";

const rl = readline.createInterface({ input, output });

export function askQuestion(number, inputArray, callback) {
  rl.question(`第${number}個:`, (input) => {
    const questionInputNumber = 4;
    try {
      isEnglish(input);
      inputArray.push(input);
      if (number < questionInputNumber) {
        askQuestion(number + 1, inputArray, callback);
      } else {
        callback(inputArray);
        rl.close();
      }
    } catch (error) {
      console.log(`${error.message}，請重新輸入`);
      askQuestion(number, inputArray, callback);
    }
  });
}
