// 4. 輸入 n 印出 1+2-3+4-5+6-7...n 的算式與總和

import promptSync from "prompt-sync";
import { Q4 } from "./Q4.js";
const prompt = promptSync({ sigint: true });

function main() {
  try {
    const input = prompt("請輸入一個正整數: ");
    const { strSequence, numTotal } = Q4(input);
    const message = `算式: ${strSequence} , 總和: ${numTotal}`;
    console.log(message);
  } catch (error) {
    console.log("輸入錯誤，請重新輸入！");
    main();
  }
}

main();
