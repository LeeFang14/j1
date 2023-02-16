// 1. 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。
//    讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」。
// !== 0

/* 大綱：
主程式：拿到數字給出答案(播放/不播放)
拆解小實作(一個步驟=ㄧ個fn)：
1. 問問題，拿到答案(使用者輸入的值)
2. try...catch 驗證答案數字範圍
    try -> 3.  catch -> 1.重問
3. 判斷是否!==0
4. 印出結果(播放/不播放)
*/
import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
const rl = readline.createInterface({ input, output });

function askQuestion() {
  rl.question("請輸入看電影人數: ", isPositiveInt);
}

// 排除非數字、負數和小數。
function isPositiveInt(answer) {
  const customer = Number(answer);
  if (customer < 0 || customer % 1 !== 0) {
    console.log("輸入錯誤，請重新輸入。");
    askQuestion();
  } else {
    isPlay(customer);
  }
}

// 判斷播放電影
function isPlay(num) {
  if (num !== 0) {
    console.log("照常播放電影");
  } else {
    console.log("不播放電影");
  }
  rl.close();
}

askQuestion();
