// 1. 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。
//    讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」。

import { isPlayMovie } from "./isPlayMovie.js";
import { askQuestion } from "./askQuestion.js";

function main() {
  askQuestion((input) => {
    const result = isPlayMovie(input);
    console.log(result);
  });
}

main();
