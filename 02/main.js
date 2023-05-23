// 2. 使用者輸入兩個整數，將它們分別除以3，判斷餘數是否相同，
//    若相同，則於螢幕上顯示「餘數相同」。

import { getInputArray } from "../utility/readlineCallback.js";
import { validation } from "./validation.js";
import { isModEqual } from "./isModEqual.js";

function main() {
  console.log("請輸入2個整數");
  getInputArray(1, [], validation, (inputArray) => {
    const numberArray = inputArray.map((item) => {
      return Number(item);
    });
    const [number1, number2] = numberArray;
    const modEqualResult = isModEqual(number1, number2, 3);
    const result = modEqualResult ? "餘數相同" : "餘數不同";
    console.log(result);
  });
}

main();
