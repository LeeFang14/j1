// 16. 運用Caesar cipher: 明文中的所有字母加密，自訂一個平移參數。
//     讓使用者輸入 5 個字母，每字向後平移 3 個數，印出加密結果

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
