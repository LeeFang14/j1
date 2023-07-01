export function Q9(arrFirst, arrSecond) {
  if (arrFirst.length === arrSecond.length) {
    return `相加後的陣列: ${sumArray(arrFirst, arrSecond)}`;
  } else {
    const arrFirstShorter = arrFirst.length < arrSecond.length;
    let filledArray = [];
    if (arrFirstShorter) {
      filledArray = fillShorterArray(arrFirst, arrSecond.length);
      return `相加後的陣列: ${sumArray(filledArray, arrSecond)}`;
    } else {
      filledArray = fillShorterArray(arrSecond, arrFirst.length);
      return `相加後的陣列: ${sumArray(arrFirst, filledArray)}`;
    }
  }
}

function sumArray(arrFirst, arrSecond) {
  return arrFirst.reduce((accumulator, currentValue, currentIndex) => {
    accumulator.push(currentValue + arrSecond[currentIndex]);
    return accumulator;
  }, []);
}

function fillShorterArray(arrShorter, arrayLength) {
  const arrFilled = [...arrShorter];
  arrFilled.length = arrayLength;
  arrFilled.fill(0, arrShorter.length);
  return arrFilled;
}
