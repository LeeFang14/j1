/**
 * 根據會員期數和費用計算總費用
 * @param {number} base 每期費用
 * @param {number} firstCostOff 首期折扣
 * @param {number} periodDiscount 滿幾期有折扣
 * @param {number} fullCostOff 滿期折扣
 * @returns {number} 總費用
 */

export function calculateMember(option) {
  const { base, firstCostOff, periodDiscount, fullCostOff } = option;
  return function calculateMemberFee(number) {
    const firstCostDiscount = base * firstCostOff;
    const fullCostDiscount = Math.trunc(number / periodDiscount) * fullCostOff;
    let result = firstCostDiscount;
    let sum = base;
    if (number === 1) {
      return result;
    }

    let index = 2;
    do {
      result = firstCostDiscount + sum - fullCostDiscount;
      sum += base;
      index++;
    } while (index <= number);

    return result;
  };
}
