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
  rotatePattern(originString, "right", 1);
}

main();
