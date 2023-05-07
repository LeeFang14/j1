export function parseArrayToString(array) {
  const rowArray = [];
  let stringPattern;

  array.forEach((subArray) => {
    let innerArray = [];
    innerArray = subArray.join("");
    rowArray.push(innerArray);
  });

  stringPattern = rowArray.join("\n");
  return stringPattern;
}

