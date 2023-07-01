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
import { strOriginPattern1 } from "./originPattern.js";

function main() {
  let strOriginPattern = `origin pattern : 
${strOriginPattern1} `;
  console.log(strOriginPattern);
  const rotateDirection = "right";
  const rotateNumber = 1;
  const strNewPattern = Q7(strOriginPattern1, rotateDirection, rotateNumber);
  console.log(strNewPattern);
}

main();
