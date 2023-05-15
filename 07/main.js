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
import { rotatePattern } from "./rotatePattern.js";
import { originString } from "./originString.js";

function main() {
  rotatePattern(originString);
  rotatePattern(originString, "left");
  rotatePattern(originString, "up");
  rotatePattern(originString, "down");
}

main();
