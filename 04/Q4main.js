// 4. 輸入 n 印出 1+2-3+4-5+6-7...n 的算式與總和

import { askQuestion } from "../utility/prompt.js";
import { Q4 } from "./Q4module.js";

function main() {
  try {
    const input = askQuestion("請輸入一個正整數: ");
    const result = Q4(input);
    console.log(result);
  } catch (error) {
    console.log(error.message);
    main();
  }
}

main();
