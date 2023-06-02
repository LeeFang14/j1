export function caesarCipher(originString, moveNumber) {
  const originStringArray = originString.split("");
  const minUpperCase = "A".charCodeAt(0);
  const maxUpperCase = "Z".charCodeAt(0);
  const minLowerCase = "a".charCodeAt(0);
  const maxLowerCase = "z".charCodeAt(0);
  const range = maxUpperCase - minUpperCase + 1;

  function judgeRange(charMax, range, movedCharCode) {
    return movedCharCode > charMax ? movedCharCode - range : movedCharCode;
  }

  return originStringArray
    .map((char) => {
      if (!/^[A-Za-z]+$/.test(char)) {
        return char;
      }
      const charCode = char.charCodeAt();
      const movedCharCode = charCode + moveNumber;
      if (charCode >= minUpperCase && charCode <= maxUpperCase) {
        return judgeRange(maxUpperCase, range, movedCharCode);
      }
      if (charCode >= minLowerCase && charCode <= maxLowerCase) {
        return judgeRange(maxLowerCase, range, movedCharCode);
      }
    })
    .map((item) => {
      return String.fromCharCode(item);
    })
    .join("");
}
