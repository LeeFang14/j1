export function Q9(arr1, arr2) {
  if (arr1.length === arr2.length) {
    return `相加後的陣列: ${sumArray(arr1, arr2)}`;
  } else {
    const isArr1LengthShorter = arr1.length < arr2.length;
    let filledArray = [];
    if (isArr1LengthShorter) {
      filledArray = fillShorterArray(arr1, arr2.length);
      return `相加後的陣列: ${sumArray(filledArray, arr2)}`;
    } else {
      filledArray = fillShorterArray(arr2, arr1.length);
      return `相加後的陣列: ${sumArray(arr1, filledArray)}`;
    }
  }
}

function sumArray(arr1, arr2) {
  return arr1.reduce((accumulator, currentValue, currentIndex) => {
    accumulator.push(currentValue + arr2[currentIndex]);
    return accumulator;
  }, []);
}

function fillShorterArray(shorterArray, maxLength) {
  const filledArray = [...shorterArray];
  filledArray.length = maxLength;
  filledArray.fill(0, shorterArray.length);
  return filledArray;
}
