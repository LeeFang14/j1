import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
// import { askQuestion } from "../modules/askQuestion.js";
import { isPositiveInteger } from "../modules/verify.js";
import { isPlayMovie } from "./isPlayMovie.js";
const rl = readline.createInterface({ input, output });

function askQuestion(query) {
  return new Promise((resolve) => {
    rl.question(query, (input) => {
      resolve(input);
    });
  });
}

function main() {
  const question = askQuestion("請輸入看電影人數: ");
  question.then((input) => {
    try {
      isPositiveInteger(input);
      rl.close();
      const number = Number(input);
      const playMovieResult = isPlayMovie(number);
      const result = playMovieResult ? "照常播放電影" : "不播放電影";
      console.log(result);
    } catch (error) {
      console.log(`${error.message}，請重新輸入`);
      main();
    }
  });
}

main();
