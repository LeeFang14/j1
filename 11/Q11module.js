import { isZero, isPositiveInteger } from "../utility/verify.js";

export function Q11(strInput, gymPrice) {
  isZero(strInput, "您確定不購買嗎？優惠快完囉");
  isPositiveInteger(strInput);
  const numInput = Number(strInput);
  const firstPeriodPercentDiscountPrice =
    gymPrice.baseFee *
    Number((1 - gymPrice.firstPeriodPercentDiscount).toFixed(2));
  const originalPrice = gymPrice.baseFee * numInput;
  let currentPeriod = 0;
  let totalFee = 0;
  let discountPrice = 0;
  do {
    currentPeriod++;
    totalFee += gymPrice.baseFee;
    if (currentPeriod === 1) {
      totalFee -= firstPeriodPercentDiscountPrice;
    }
    if (currentPeriod % gymPrice.periodDiscount === 0) {
      totalFee -= gymPrice.periodDiscountPrice;
      discountPrice += gymPrice.periodDiscountPrice;
    }
  } while (currentPeriod < numInput);

  return `共${numInput}期，原價${originalPrice}元-首期折扣${firstPeriodPercentDiscountPrice}元-滿額折扣${discountPrice}元=總金額${totalFee} 元。`;
}
