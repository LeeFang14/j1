import {
  parseStringToArray,
  rotateDirection,
  parseArrayToString,
} from "./processInput.js";

export function rotatePattern(stringPattern, direction = "right") {
  if (direction !== "right" && direction !== "left") {
    console.log(`沒有 "${direction}" 這個選項，無法旋轉。`);
    return;
  }
  console.log("origin pattern :");
  console.log(stringPattern);
  const twoDimensionalArray = parseStringToArray(stringPattern);
  const rotatedArray = rotateDirection(twoDimensionalArray, direction);
  const result = parseArrayToString(rotatedArray);
  console.log(`turn ${direction} 90° :`);
  console.log(result);
}
