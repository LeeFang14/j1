// 1. 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。
//    讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」。

import { askQuestion } from "../utility/prompt.js";
import { Q1 } from "./Q1module.js";

function main() {
  try {
    const input = askQuestion("請輸入看電影人數: ");
    const stateMoviePlaying = Q1(input);
    console.log(stateMoviePlaying);
    a = Q1(input);
  } catch (error) {
    console.log(error.message, "請重新輸入");
    main();
  }
}
