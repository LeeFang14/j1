// 6. 宣告陣列 name，讓使用者自行輸入四個英文名字於陣列中，
//    輸出第一個和第三個名字的單數個字母。
import { getInputArray } from "../utility/readlinePromise.js";
import { verifyInput } from "./verifyInput.js";
import { getOddIndexLiterals } from "./getOddIndex.js";

function main() {
  getInputArray("請輸入4個英文名字", 4, verifyInput).then((inputArray) => {
    inputArray
      .map((item) => {
        return getOddIndexLiterals(item);
      })
      .forEach((item, index) => {
        if (index % 2 === 0) {
          console.log(`第${index + 1}個單數個字母: ${item}`);
        }
      });
  });
}
main();
