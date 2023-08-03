import { isEmpty, isEnglish, isLengthEqualNumber } from "../utility/verify.js";

export function Q16(strInput) {
  isEmpty(strInput);
  isEnglish(strInput);
  isLengthEqualNumber(strInput, 5);
  const arrInput = strInput.split("");
  const encryptedInput = arrInput.map((strChar) => {
    const numCharCode = strChar.charCodeAt();
    const moveNumber = 3;
    let numMovedCharCode = numCharCode + moveNumber;
    if (numCharCode >= 65 && numCharCode <= 90) {
      numMovedCharCode = isOverRange(numMovedCharCode, 90);
    } else {
      numMovedCharCode = isOverRange(numMovedCharCode, 122);
    }
    const strMovedCharCode = String.fromCharCode(numMovedCharCode);
    return strMovedCharCode;
  });

  return `加密結果: ${encryptedInput.join("")}`;
}

function isOverRange(movedCharCode, charMax) {
  const range = 26;
  if (movedCharCode > charMax) {
    return movedCharCode - range;
  } else {
    return movedCharCode;
  }
}
