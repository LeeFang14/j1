import {
  parseStringToArray,
  rotateDirection,
  parseArrayToString,
} from "./processInput.js";

export function rotatePattern(stringPattern, direction, NumberOfRotate = 1) {
  if (direction !== "right" && direction !== "left") {
    console.log(`沒有 "${direction}" 這個選項，無法旋轉。`);
    return;
  }
  const angle = NumberOfRotate * 90;
  console.log("origin pattern :");
  console.log(stringPattern);
  const twoDimensionalArray = parseStringToArray(stringPattern);
  let rotatedArray = twoDimensionalArray;
  for (let currentRotate = 0; currentRotate < NumberOfRotate; currentRotate++) {
    rotatedArray = rotateDirection(rotatedArray, direction);
  }
  const result = parseArrayToString(rotatedArray);
  console.log(`turn ${direction} ${angle}° :`);
  console.log(result);
}
