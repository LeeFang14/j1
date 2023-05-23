export function getOddIndexLiterals(string) {
  const trimString = string.replace(/ /g, "");
  const charArray = trimString.split("");
  return charArray.filter((_, index) => index % 2 === 0).join(",");
}
