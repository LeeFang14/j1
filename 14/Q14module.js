import { isPositiveInteger } from "../utility/verify.js";

export function Q14(strInput) {
  isPositiveInteger(strInput);
  const numMinute = Number(strInput);
  const originBacteria = 1;
  const grownMinute = 20;
  const grownBacteria = twofold(originBacteria, numMinute, grownMinute);
  return `細菌目前有 ${originBacteria} 隻，在 ${numMinute} 分鐘後，細菌有 ${grownBacteria} 隻。`;
}

function twofold(bacteria, minute, grownMinute) {
  if (minute < grownMinute) {
    return bacteria;
  }
  bacteria = bacteria * 2;
  return twofold(bacteria, minute - grownMinute, grownMinute);
}
