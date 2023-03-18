function umlEven(num, resultArr = []) {
  if (num === 2) {
    resultArr.push(num);
    return resultArr;
  } else {
    resultArr.push(num);
    return umlEven(num - 2, resultArr);
  }
}

function calculateSum(arr) {
  return arr.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue * (currentValue - 2),
    0
  );
}

export { umlEven, calculateSum };
