import { isEmpty, isEnglish, isLengthEqualNumber } from "../utility/verify.js";

export function Q16(strInput) {
  isEmpty(strInput);
  isEnglish(strInput);
  isLengthEqualNumber(strInput, 5);

  const arrInput = strInput.split("");
  const encryptedInput = arrInput.map((strChar) => {
    const movePlace = 3;

    // input handler
    const numCharCode = strChar.charCodeAt();

    // calc
    let charCode = numCharCode + movePlace;

    // check
    if (upperCaseLetter(numCharCode)) {
      charCode = isOverRange(charCode, Z);
    } else if (lowerCaseLetter(numCharCode)) {
      charCode = isOverRange(charCode, z);
    } else {
      throw new Error("something Error");
    }

    // output handler
    return String.fromCharCode(charCode);
  });

  return `加密結果: ${encryptedInput.join("")}`;
}

function lowerCaseLetter(letter) {
  const a = 97;
  const z = 122;
  return letter >= a && letter <= z;
}

function upperCaseLetter(letter) {
  const A = 65;
  const Z = 90;
  return letter >= A && letter <= Z;
}

function isOverRange(movedCharCode, charMax) {
  const letterRange = 26;
  if (movedCharCode > charMax) {
    return movedCharCode - letterRange;
  } else {
    return movedCharCode;
  }
}
