export function divi(originNumber, divisor, times = 1) {
  let number = originNumber / divisor;
  if (Math.floor(number * 100) % 10 === 0) {
    return times;
  } else {
    return divi(number, divisor, times + 1);
  }
}
