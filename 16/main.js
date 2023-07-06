// 16. 運用Caesar cipher: 明文中的所有字母加密，自訂一個平移參數。
//     讓使用者輸入 5 個字母，每字向後平移 3 個數，印出加密結果
// 1. 拿到使用者輸入的值(string)，ex. AabBc
// 2. 把該值(string)切開並轉成charCode 回傳新陣列，ex. ["A","a","b","B",c] => [ 65, 97, 98, 66, 99 ]
// 3. 平移字母位置charCode，轉成字母值，並回傳字串。

import { askQuestion } from "../utility/prompt.js";
import { Q16 } from "./Q16.js";

function main() {
  try {
    const fiveEnglishLiteral = askQuestion("請輸入五個英文字母: ");
    const result = Q16(fiveEnglishLiteral);
    console.log(result);
  } catch (error) {
    console.log(`${error.message},請重新輸入`);
    main();
  }
}

main();
