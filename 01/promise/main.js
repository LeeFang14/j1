import { askQuestion } from "../../modules/askQuestion-promise.js";
import { getInput } from "./getInput.js";
import { isPlayMovie } from "../isPlayMovie.js";

export function main() {
  const question = askQuestion("請輸入看電影人數: ");
  question.then((input) => {
    getInput(input, (number) => {
      const playMovieResult = isPlayMovie(number);
      const result = playMovieResult ? "照常播放電影" : "不播放電影";
      console.log(result);
    });
  });
}

main();
