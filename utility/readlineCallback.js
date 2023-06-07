import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
const rl = readline.createInterface({ input, output });

export function askQuestion(query, questionCount, verifyInput, processInput) {
  const inputArray = [];
  let questionNumber = 1;
  function getAllInput() {
    const title =
      questionCount === 1 ? query : `${query}，第${questionNumber}個: `;
    rl.question(title, (input) => {
      try {
        verifyInput(input);
        inputArray.push(input);
        if (questionNumber < questionCount) {
          questionNumber++;
          getAllInput();
        } else {
          processInput(inputArray);
          rl.close();
        }
      } catch (error) {
        console.log(`${error.message}，請重新輸入`);
        getAllInput();
      }
    });
  }
  getAllInput();
}
