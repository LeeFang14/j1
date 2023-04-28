import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import { isInteger } from "../modules/verify.js";

const rl = readline.createInterface({ input, output });

export function askQuestion(num, inputArray, printResult) {
  rl.question(`第${num}個: `, (input) => {
    const questionInputNumber = 2;
    try {
      isInteger(input);
      const verified = Number(input);
      inputArray.push(verified);
      if (num < questionInputNumber) {
        askQuestion(num + 1, inputArray, printResult);
      } else {
        printResult(inputArray);
        rl.close();
      }
    } catch (error) {
      console.log(`${error.message}，請重新輸入`);
      askQuestion(num, inputArray, printResult);
    }
  });
}
