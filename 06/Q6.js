export function Q6(array) {
  return array
    .map(pickOddIndexLiteral)
    .filter(pickOddIndex)
    .map((item) => `結果: ${item}`);
}

function pickOddIndex(_, index) {
  return index % 2 === 0;
}

function pickOddIndexLiteral(string) {
  return string.replace(/ /g, "").split("").filter(pickOddIndex).join(",");
}
