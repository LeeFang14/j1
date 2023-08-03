import { isEmpty, isEnglish } from "../utility/verify.js";

export function Q6(arr) {
  return arr
    .map((input, index) => {
      isEmpty(input);
      isEnglish(input);
      return pickOddIndexLiteral(input, index);
    })
    .filter(pickOddIndex)
    .join("\n");
}

function pickOddIndex(_, index) {
  return index % 2 === 0;
}

function pickOddIndexLiteral(input, index) {
  const oddIndexLiteral = input
    .replace(/ /g, "")
    .split("")
    .filter(pickOddIndex)
    .join(",");
  return `第${index + 1}個${input}的單數個字母: ${oddIndexLiteral}`;
}
