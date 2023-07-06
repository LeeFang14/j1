import { isZero, isPositiveInteger } from "../utility/verify.js";

export function Q11(strInput) {
  isZero(strInput);
  isPositiveInteger(strInput);
  const numInput = Number(strInput);
  const gymFeeCalculator = calculateMember({
    baseFee: 500,
    firstPeriodDiscount: 0.79,
    periodDiscount: 5,
    periodDiscountPrice: 200,
  });
  const result = gymFeeCalculator(numInput);
  return `共 ${numInput} 期，總金額: ${result} 元`;
}

function calculateMember(option) {
  const { baseFee, firstPeriodDiscount, periodDiscount, periodDiscountPrice } =
    option;
  return function calculateMemberFee(number) {
    const firstPeriodDiscountPrice =
      firstPeriodDiscount > 0 && firstPeriodDiscount < 1
        ? baseFee * +(1 - firstPeriodDiscount).toFixed(2)
        : 0;
    let currentPeriod = 0;
    let totalFee = 0;
    do {
      currentPeriod++;
      totalFee += baseFee;
      if (currentPeriod === 1) {
        totalFee -= firstPeriodDiscountPrice;
      }
      if (currentPeriod % periodDiscount === 0) {
        totalFee -= periodDiscountPrice;
      }
    } while (currentPeriod < number);
    return totalFee;
  };
}
