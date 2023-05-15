// // 6. 宣告陣列 name，讓使用者自行輸入四個英文名字於陣列中，輸出第一個和第三個名字的單數個字母。
import { getInputArray } from "../utility/readlinePromise.js";
import { validation } from "./validation.js";
import { getOddIndexValue, getOddIndexLiterals } from "./getOddIndex.js";

function main() {
  console.log("請輸入4個英文名字");
  getInputArray(4, validation, [], (inputArray) => {
    getOddIndexValue(inputArray).forEach((item) => {
      const result = getOddIndexLiterals(item);
      console.log(`${item} 的單數個字母: ${result}`);
    });
  });
}

main();
