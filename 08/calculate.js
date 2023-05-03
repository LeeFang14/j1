export function divi(num, divisor, times = 1) {
  let number = num / divisor;
  if (Math.floor(number * 100) % 10 === 0) {
    return times;
  } else {
    return divi(number, divisor, times + 1);
  }
}
