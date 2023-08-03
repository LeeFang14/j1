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
import { originPattern } from "./originPattern.js";
import { Q7 } from "./Q7module.js";

function main() {
  console.log(`origin pattern : 
${originPattern} `);
  const rotateDirection = "right"; // left or right
  const rotateNumber = 3;
  const newPattern = Q7(originPattern, rotateDirection, rotateNumber);
  console.log(newPattern);
}

main();
