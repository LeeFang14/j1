// 2. 使用者輸入兩個整數，將它們分別除以3，判斷餘數是否相同，若相同，則於螢幕上顯示「餘數相同」。

import promptSync from "prompt-sync";
import { Q2 } from "./Q2.js";
const prompt = promptSync({ sigint: true });

function main() {
  try {
    console.log("請輸入兩個整數");
    const numTwoInteger = [prompt("第一個: "), prompt("第二個: ")];
    const message = Q2(numTwoInteger);
    console.log(message);
  } catch (error) {
    console.log("輸入錯誤，請重新輸入！");
    main();
  }
}

main();
