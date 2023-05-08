// 11. 好想健身房新開幕，每期會費500元，第一期79折，每滿五期再折200元，
//     請讓使用者自行輸入所需期數，並利用do while計算，印出總費用。
// 每滿五期再折200元: 總期數/滿5期(5抽成變數a) = 無條件捨去小數點。number=期數
//          首期折扣 +    每期價格    -    滿期折扣
//    firstCostDiscount +                - fullCostDiscount
// 第1期: (500*0.79)+((number-1)*500)-(number/a*200) = 500*0.79 + 1-1*500 - 1/5*200
// 第2期: (500*0.79)+((number-1)*500)-(number/a*200) = 500*0.79 + 2-1*500 - 2/5*200
// 第3期: (500*0.79)+((number-1)*500)-(number/a*200) = 500*0.79 + 3-1*500 - 3/5*200
// 第4期: (500*0.79)+((number-1)*500)-(number/a*200) = 500*0.79 + 4-1*500 - 4/5*200
// 第5期: (500*0.79)+((number-1)*500)-(number/a*200) = 500*0.79 + 5-1*500 - 5/5*200
export function getMemberFee(number) {
  // number = 總期數;
  let sum;
  const eachCost = 500; // 每期費用
  const firstCostOff = 0.79; //首期折扣
  const periodDiscount = 5; //滿幾期有折扣
  const fullCostOff = 200; //滿額折扣
  const firstCostDiscount = eachCost * firstCostOff; //首期金額
  const fullCostDiscount = Math.trunc(number / periodDiscount) * fullCostOff; //滿n期總金額
  sum = firstCostDiscount + (number - 1) * eachCost - fullCostDiscount;
  // let index = 0;
  // if (number === 1) {
  //   result = firstCostDiscount;
  //   console.log(`共 ${number} 期，費用: ${result} 元`);
  // }
  // do {
  //   index++;
  //   result = firstCostDiscount + index * eachCost - fullCostDiscount;
  // } while (index <= number);
  // console.log(`共 ${number} 期，費用: ${result} 元`);
  return sum;
}

// getMemberFee(4);
