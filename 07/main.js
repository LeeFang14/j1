// 7. 印出下圖，並轉 90°
//   ** **  
//  ******* 
// *********
// *********
//  ******* 
//   *****  
//    ***   
//     *
// -------------------------------
import { parseStringToArray } from "./parseStringToArray.js"
import { rotateArray } from "./rotateArray.js"
import { parseArrayToString } from "./parseArrayToString.js"

const originString1 = `  ** **
 *******
*********
*********
 *******
  *****
   ***
    *`

const originString2 = `***** *****
****   ****
***     ***
**       **
****   ****
****   ****`

const originString3 = `*******
*     *
**   **
**   **
**   **
*     *
*******`



function main(stringPattern) {
  console.log("原圖:");
  console.log(stringPattern);
  const twoDimensionalArray = parseStringToArray(stringPattern);
  const rotatedArray = rotateArray(twoDimensionalArray);
  const result = parseArrayToString(rotatedArray);
  console.log("向右轉 90° :");
  console.log(result);
}

main(originString1);