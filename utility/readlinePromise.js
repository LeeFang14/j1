import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
const rl = readline.createInterface({ input, output });

export function askQuestion(query) {
  return new Promise((resolve) => {
    rl.question(query, (input) => {
      resolve(input);
    });
  });
}

export function getInput(input, validation, processInput) {
  try {
    validation(input);
    processInput(input);
    rl.close();
  } catch (error) {
    console.log(error.message);
    askQuestion("請重新輸入: ").then((input) => {
      getInput(input, validation, processInput);
    });
  }
}

export function getInputArray(
  questionCount,
  validation,
  inputArray,
  processInput
) {
  let questionNumber = 1;

  function getNextInput() {
    askQuestion(`第${questionNumber}個: `).then((input) => {
      try {
        validation(input);
        inputArray.push(input);
        if (questionNumber < questionCount) {
          questionNumber++;
          getNextInput();
        } else {
          processInput(inputArray);
          rl.close();
        }
      } catch (error) {
        console.log(`${error.message}，請重新輸入。`);
        getNextInput();
      }
    });
  }

  getNextInput();
}
