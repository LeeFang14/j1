// // 6. 宣告陣列 name，讓使用者自行輸入四個英文名字於陣列中，輸出第一個和第三個名字的單數個字母。

import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
// import { isEnglish } from "../../modules/verify.js";
// import { getOddLiterals } from "../getOddLiterals.js";

const rl = readline.createInterface({ input, output });

function askQuestion(query) {
  return new Promise((resolve) => {
    rl.question(query, (input) => {
      resolve(input);
    });
  });
}

function main() {
  console.log("請輸入四個英文名字");
  const q1 = askQuestion("第1個: ");
  const q2 = askQuestion("第2個: ");
  const q3 = askQuestion("第3個: ");
  const q4 = askQuestion("第4個: ");

  q1.then((input) => {
    console.log("q1: ", input);
  });
  q2.then((input) => {
    console.log("q2: ", input);
  });
  q3.then((input) => {
    console.log("q3: ", input);
  });
  q4.then((input) => {
    console.log("q4: ", input);
  });
}

main();

// // // 6. 宣告陣列 name，讓使用者自行輸入四個英文名字於陣列中，輸出第一個和第三個名字的單數個字母。

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

// function getInput(number, inputArray) {
//   return askQuestion(`第 ${number} 個英文名字: `).then((input) => {
//     try {
//       isEnglish(input);
//       inputArray.push(input);
//       if (inputArray.length < 4) {
//         return getInput(number + 1, inputArray);
//       } else {
//         return inputArray;
//       }
//     } catch (error) {
//       console.log(`${error.message}，請重新輸入`);
//       return getInput(number, inputArray);
//     }
//   });
// }

// function main() {
//   console.log("請輸入四個英文名字");
//   getInput(1, [])
//     .then(([name1, name2, name3, name4]) => {
//       const answer1 = getOddLiterals(name1);
//       console.log(`第一個名字的單數個字母: ${answer1}`);
//       const answer2 = getOddLiterals(name3);
//       console.log(`第三個名字的單數個字母: ${answer2}`);
//       rl.close();
//     })
//     .catch((error) => {
//       console.log(error);
//       rl.close();
//     });
// }

// main();
