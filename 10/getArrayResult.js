export function getArrayResult(array, allPrimesArray) {
  const primesResult = [];
  const primesIndex = [];
  const arrayResult = [];
  array.forEach((arrayElement, arrayIndex) => {
    allPrimesArray.map((allPrimesElement) => {
      if (arrayElement === allPrimesElement) {
        primesResult.push(arrayElement);
        primesIndex.push(arrayIndex);
      }
    });
  });
  arrayResult.push(primesResult, primesIndex);
  return arrayResult;
}
