export function sumArray(firstArray, secondArray) {
  if (firstArray.length === secondArray.length) {
    return firstArray.reduce((accumulator, currentValue, currentIndex) => {
      accumulator.push(currentValue + secondArray[currentIndex]);
      return accumulator;
    }, []);
  }
  const shortArray = firstArray.length < secondArray.length;
  const longArray = shortArray ? secondArray : firstArray;
  const fillArray = shortArray ? firstArray : secondArray;
  const filledArray = fillShortArray(fillArray, longArray.length);
  return longArray.reduce((accumulator, currentValue, currentIndex) => {
    accumulator.push(currentValue + filledArray[currentIndex]);
    return accumulator;
  }, []);
}

function fillShortArray(originArray, arrayLength) {
  const newArray = [...originArray];
  newArray.length = arrayLength;
  newArray.fill(0, originArray.length);
  return newArray;
}
