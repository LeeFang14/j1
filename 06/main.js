// 6. 宣告陣列 name，讓使用者自行輸入四個英文名字於陣列中，輸出第一個和第三個名字的單數個字母。

import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import { isEnglish } from "../modules/verify.js";
import { countLetter, printSingleLetter } from "./countLetter.js";
const rl = readline.createInterface({ input, output });

function main() {
  function getAnswerArr(num, answers, callback) {
    rl.question(`請輸入4個英文名字，第${num}個: `, (answer) => {
      try {
        isEnglish(answer);
        answers.push(answer);
        if (num < 4) {
          getAnswerArr(num + 1, answers, callback);
        } else {
          callback(answers);
          rl.close();
        }
      } catch (error) {
        console.log(`${error.message}，請重新輸入`);
        getAnswerArr(num, answers, callback);
      }
    });
  }

  getAnswerArr(1, [], (answers) => {
    // console.log(answers);

    const NameOne = countLetter(answers[0]);
    console.log(NameOne);
    const resultOne = printSingleLetter(NameOne);
    const NameThree = countLetter(answers[2]);
    const resultThree = printSingleLetter(NameThree);

    console.log(`${answers[0]} : ${resultOne}\n${answers[2]} : ${resultThree}`);
  });
}

main();
