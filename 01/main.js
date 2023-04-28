// 1. 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。
//    讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」。
import { isPlayMovie } from "./isPlayMovie.js";
import { askQuestion } from "./askQuestion.js";
debugger;
function main() {
  askQuestion("請輸入看電影人數: ", (number) => {
    const playMovieResult = isPlayMovie(number);
    const result = playMovieResult ? "照常播放電影" : "不播放電影";
    console.log(result);
  });
}

main();
