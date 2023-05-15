import {
  parseStringToArray,
  rotateDirection,
  parseArrayToString,
} from "./processInput.js";

export function rotatePattern(stringPattern, direction = "right") {
  console.log("原圖:");
  console.log(stringPattern);
  const twoDimensionalArray = parseStringToArray(stringPattern);
  const rotatedArray = rotateDirection(twoDimensionalArray, direction);
  const result = parseArrayToString(rotatedArray);
  console.log(`turn ${direction} 90° :`);
  console.log(result);
}
