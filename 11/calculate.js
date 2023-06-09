/**
 * 根據會員期數和費用計算總費用
 * @param {number} baseFee 每期費用
 * @param {number} firstPeriodDiscount 首期折扣:幾折，沒有折扣為 0
 * @param {number} periodDiscount 滿期折扣:幾期
 * @param {number} periodDiscountPrice 滿期折扣金額
 */

export function calculateMember(option) {
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
