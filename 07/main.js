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
import { Q7 } from "./Q7.js";
import { originPattern } from "./originPattern.js";

function main() {
  console.log(`origin pattern : 
${originPattern} `);
  const rotateDirection = "left";
  const rotateNumber = 1;
  const newPattern = Q7(originPattern, rotateDirection, rotateNumber);
  console.log(newPattern);
}

main();
