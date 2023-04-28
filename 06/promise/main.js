// // 6. 宣告陣列 name，讓使用者自行輸入四個英文名字於陣列中，輸出第一個和第三個名字的單數個字母。

// import * as readline from "node:readline";
// import { stdin as input, stdout as output } from "node:process";
// import { isEnglish } from "../../modules/verify.js";
// import { getOddLiterals } from "../getOddLiterals.js";

// const rl = readline.createInterface({ input, output });

// function askQuestion(query) {
//   return new Promise((resolve) => {
//     rl.question(query, (input) => {
//       resolve(input);
//     });
//   });
// }

// function main() {
//   const question = askQuestion(`請輸入四個英文名字`);
//   question.then((input) => {
//     getInput(input, 1, [], (answers) => {
//       let [name1, name2, name3, name4] = answers;
//       const answer1 = getOddLiterals(name1);
//       console.log(answer1);
//       const answer2 = getOddLiterals(name3);
//       console.log(answer2);
//     });
//   });
// }

// function getInput(input, number, inputArray, printResult) {
//   const questionInputNumber = 4;
//   try {
//     console.log(`第${number}個: `);
//     isEnglish(input);
//     inputArray.push(input);
//     if (number < questionInputNumber) {
//       getInput(input, number + 1, inputArray, printResult);
//     } else {
//       printResult(inputArray);
//       rl.close();
//     }
//   } catch (error) {
//     console.log(`${error.message}，請重新輸入`);
//     main(input, number, inputArray, printResult);
//   }
// }

// main();

import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import { isEnglish } from "../../modules/verify.js";
import { getOddLiterals } from "../getOddLiterals.js";

const rl = readline.createInterface({ input, output });

function askQuestion(query) {
  return new Promise((resolve) => {
    rl.question(query, (input) => {
      resolve(input);
    });
  });
}

function getInput(number, inputArray) {
  return askQuestion(`第 ${number} 個英文名字: `).then((input) => {
    try {
      isEnglish(input);
      inputArray.push(input);
      if (inputArray.length < 4) {
        return getInput(number + 1, inputArray);
      } else {
        return inputArray;
      }
    } catch (error) {
      console.log(`${error.message}，請重新輸入`);
      return getInput(number, inputArray);
    }
  });
}

function main() {
  console.log("請輸入四個英文名字");
  getInput(1, [])
    .then(([name1, name2, name3, name4]) => {
      const answer1 = getOddLiterals(name1);
      console.log(`第一個名字的單數個字母: ${answer1}`);
      const answer2 = getOddLiterals(name3);
      console.log(`第三個名字的單數個字母: ${answer2}`);
      rl.close();
    })
    .catch((error) => {
      console.log(error);
      rl.close();
    });
}

main();
