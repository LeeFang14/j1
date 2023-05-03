// 10. 宣告一整數陣列 array = [3,50,0,13,2,4,11] 試寫一程式，印出陣列中所包含的質數以及其索引值。
// 一個自然數若恰有兩個正因數（1及此數本身），則稱之為質數。
// 先找出陣列最大值，找出最大值內的所有質數，再一一比對。
// 1. 找陣列最大值arrayMaxNumber
// 2. 計算arrayMaxNumber值所有質數，並存成陣列A
// 3. 對原陣列做filter/map比對與A有沒有重複的值，有的話即是質數。

import { getAllPrimesArray } from "./getAllPrimesArray.js";
import { getArrayResult } from "./getArrayResult.js";

function main() {
  const array = [3, 50, 0, 13, 2, 4, 11];
  const arrayMaxNumber = Math.max(...array);
  const allPrimesArray = getAllPrimesArray(arrayMaxNumber);
  const arrayResult = getArrayResult(array, allPrimesArray);
  let [primeArray, primeIndex] = arrayResult;
  console.log("質數:", primeArray);
  console.log("索引值:", primeIndex);
}

main();
