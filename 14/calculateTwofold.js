export function calculateTwofold(growTime, multiple) {
  return function twofold(bacteria, minute) {
    const addTimes = Math.trunc(minute / growTime);
    if (minute < growTime) {
      return bacteria;
    }
    let sum = bacteria;
    for (let index = 1; index <= addTimes; index++) {
      sum = sum * multiple;
    }
    return sum;
  };
}
