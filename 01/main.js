// 1. 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。
//    讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」。

// 1. readline 拿到使用者輸入的值
// 2. 驗證使用者輸入的值 ok往下->3，不行 -> 1 重問
// 3. 用「!」判斷人數，不為零顯示「照常播放電影」。

import { askQuestion } from "../utility/readlineCallback.js";
import { verifyInput } from "./verifyInput.js";
import { isNotEqualNumber } from "./isNotEqualNumber.js";

function main() {
  askQuestion("請輸入看電影人數: ", 1, verifyInput, (inputArray) => {
    const verified = Number(inputArray[0]);
    const isPlayMovie = isNotEqualNumber(verified, 0);
    const result = isPlayMovie ? "照常播放電影" : "不播放電影";
    console.log(result);
  });
}

main();
