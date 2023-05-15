export function getOddIndexValue(array) {
  return array.filter((item, index) => index % 2 === 0);
}

export function getOddIndexLiterals(string) {
  const newString = string.trim();
  const charArray = newString.split("");
  return charArray.filter((item, index) => index % 2 === 0).join(",");
}
