export function sumArray(firstArray, secondArray) {
  if (firstArray.length === secondArray.length) {
    return firstArray.map((value, index) => value + secondArray[index]);
  }
  const shortArray = firstArray.length < secondArray.length;
  const longArray = shortArray ? secondArray : firstArray;
  const fillArray = shortArray ? firstArray : secondArray;
  const filledArray = fillShortArray(fillArray, longArray.length);
  return longArray.map((value, index) => value + filledArray[index]);
}

function fillShortArray(originArray, arrayLength) {
  const newArray = [...originArray];
  newArray.length = arrayLength;
  newArray.fill(0, originArray.length);
  return newArray;
}
