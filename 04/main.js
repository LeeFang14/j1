// 4. 輸入 n 印出 1+2-3+4-5+6-7...n 的算式與總和
// for (let i ; i=<n ;i++) { n++ }
// 1 + 2 + (-3) + 4 + (-5) + 6 + (-7)

import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
const rl = readline.createInterface({ input, output });

function askQuestion() {
  rl.question("請輸入一個正整數: ", isPositiveInt);
}

// 排除掉負數和小數，只接受正整數。
function isPositiveInt(input) {
  let num = Number(input);
  if (num < 0 || num % 1 !== 0) {
    console.log("輸入錯誤，請重新輸入。");
    askQuestion();
  } else {
    return;
    // getAnswer(answer); // 改成return
  }
}

// 將輸入者的資料輸出成陣列，如果 > 1 的奇數圈，要乘以(-1)。
function getAnswer(num) {
  let getAnswerArr = [];
  for (let i = 1; i <= num; i++) {
    if (i > 1 && i % 2 !== 0) {
      getAnswerArr.push(i * -1);
    } else {
      getAnswerArr.push(i);
    }
  }
  // sumAnswer(getAnswerArr);
  return getAnswerArr;
}

// 加總拿到的值，用array Methods reduce
function sumAnswer(arr) {
  const sumArrValue = arr.reduce((add, num) => add + num, 0);
  console.log(sumArrValue);
  rl.close();
}
askQuestion();
