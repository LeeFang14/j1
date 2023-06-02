// 16. 運用Caesar cipher: 明文中的所有字母加密，自訂一個平移參數。
//     讓使用者輸入 5 個字母，每字向後平移 3 個數，印出加密結果
// 1. 拿到使用者輸入的值(string)，ex. AabBc
// 2. 把該值(string)切開並轉成charCode 回傳新陣列，ex. ["A","a","b","B",c] => [ 65, 97, 98, 66, 99 ]
// 3. 平移字母位置charCode，轉成字母值，並回傳字串。
import { getInputArray } from "../utility/readlinePromise.js";
import { validation } from "./validation.js";
import { caesarCipher } from "./processInput.js";

function main() {
  getInputArray("請輸入5個英文字母: ", 1, validation).then((inputArray) => {
    const verified = inputArray[0];
    const result = caesarCipher(verified, 3);
    console.log(`${verified} 加密結果: ${result}`);
  });
}

main();
