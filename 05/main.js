// 5. 寫一個遞迴函數 function umleven(n) 來求算 2*4 + 4*6 + 6*8...+(n-2)*n
// (n最小為 4, 只會出現偶數)

import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
const rl = readline.createInterface({ input, output });

function askQuestion() {
  rl.question("請輸入包含4以上的正整數: ", isPositiveInt);
}
// 排除掉<4和小數，只接受=>4正整數。
function isPositiveInt(answer) {
  let num = Number(answer);
  if (num < 4 || num % 1 !== 0) {
    console.log("輸入錯誤，請重新輸入。");
    askQuestion();
  } else {
    umleven(answer);
  }
}
// 5!= 5x4x3x2x1
// function factorial(num) {
//   if (num === 1) {
//     return num;
//   } else {
//     return num * factorial(num - 1);
//   }
// }
// factorail(5);

// 將輸入者的資料輸出成陣列，只拿n是偶數的資料。
function umleven(num) {
  let getAnswerArr = [];
  for (let i = 1; i <= num; i++) {
    if (i > 1 && i % 2 == 0) {
      getAnswerArr.push(i);
    }
  }
  sumAnswer(getAnswerArr);
}

// 加總拿到的值，用array Methods reduce
function sumAnswer(arr) {
  const sumArrValue = arr.reduce((add, num) => add + num * (num - 2), 0);
  console.log(sumArrValue);
  rl.close();
}

askQuestion();

/* 遞迴寫法
// 把!n放到陣列裡。
function factorial(num) {
  let array = [];
  if (num === 1) {
    array.push(num);
    return array;
  } else {
    array.push(num);
    return array.concat(factorial(num - 1));
  }
}

// 從後面印出
function printArray(num) {
  for (let i = num.length - 1; i >= 0; i--) {
    console.log(num[i]);
  }
}

const newArray = factorial(5);
printArray(newArray);
*/
