export function umlEven(number, resultArray = []) {
  if (number === 2) {
    resultArray.unshift(number);
    return resultArray;
  } else {
    resultArray.unshift(number);
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
