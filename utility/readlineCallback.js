import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
const rl = readline.createInterface({ input, output });

export function askQuestion(query, questionCount, validation, processInput) {
  const inputArray = [];
  let questionNumber = 1;
  function getNextInput() {
    const title =
      questionCount === 1 ? query : `${query}，第${questionNumber}個: `;
    rl.question(title, (input) => {
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
        console.log(`${error.message}，請重新輸入`);
        getNextInput();
      }
    });
  }
  getNextInput();
}
