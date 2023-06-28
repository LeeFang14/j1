import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
const rl = readline.createInterface({ input, output });

export function askQuestion(question, countQuestion, callback, verifyInput) {
  const inputArray = [];
  function getAllInput(indexQuestion) {
    let title = titleMaker(countQuestion, question, indexQuestion);
    rl.question(title, (input) => {
      try {
        verifyInput(input);
        inputArray.push(input);
        if (indexQuestion < countQuestion) {
          getAllInput(++indexQuestion);
        } else {
          callback(inputArray);
          rl.close();
        }
      } catch (error) {
        console.log(`${error.message}，請重新輸入`);
        getAllInput(1);
      }
    });
  }
  getAllInput(1);
}
function titleMaker(questionCount, question, questionNumber) {
  let title = "";
  if (questionCount === 1) {
    title = question;
  } else {
    title = `${question}，第${questionNumber}個: `;
  }
  return title;
}
