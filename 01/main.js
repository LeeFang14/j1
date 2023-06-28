// 1. 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。
//    讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」。

import promptSync from "prompt-sync";
import { Q1 } from "./Q1.js";
const prompt = promptSync({ sigint: true });

function main() {
  try {
    const input = prompt("請輸入看電影人數: ");
    const stateMoviePlaying = Q1(input);
    console.log(stateMoviePlaying);
  } catch (error) {
    console.log("需輸入整數，請重新輸入！");
    main();
  }
}

main();
