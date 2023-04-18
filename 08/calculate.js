function divi(n, times = 1) {
  let num = n / 3;
  if (Math.floor(num * 100) % 10 === 0) {
    return times;
  } else {
    return divi(num, times + 1);
  }
}

export { divi };
