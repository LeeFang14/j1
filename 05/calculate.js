export function umlEven(number, resultArray = []) {
  if (number === 2) {
    resultArray.push(number);
    return resultArray;
  } else {
    resultArray.push(number);
    return umlEven(number - 2, resultArray);
  }
}

export function calculateSum(array) {
  return array.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue * (currentValue - 2),
    0
  );
}
