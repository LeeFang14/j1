import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

export function askQuestion(query, validation, printResult) {
  rl.question(query, (input) => {
    try {
      validation(input);
      printResult(input);
      rl.close();
    } catch (error) {
      console.log(`${error.message}，請重新輸入`);
      askQuestion(query, validation, printResult);
    }
  });
}

export function getInputArray(num, inputArray, validation, printResult) {
  rl.question(`第${num}個: `, (input) => {
    const questionInputNumber = 2;
    try {
      validation(input);
      inputArray.push(input);
      if (num < questionInputNumber) {
        getInputArray(num + 1, inputArray, validation, printResult);
      } else {
        printResult(inputArray);
        rl.close();
      }
    } catch (error) {
      console.log(`${error.message}，請重新輸入`);
      getInputArray(num, inputArray, validation, printResult);
    }
  });
}
