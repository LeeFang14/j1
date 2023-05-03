// 7. 印出下圖，並轉 90°  (8*9)
//    ** **
//   *******
//  *********
//  *********
//   *******
//    *****
//     ***
//      *

/*
var a = [];
for (let i = 0; i < 8; i++) {
  //行迴圈
  let b = []; //輔助陣列
  let c;
  for (let j = 0; j < 9; j++) {
    //列迴圈
    b.push("*");
    c = b.join(","); //定義陣列b的元素值
  }

  console.log("c", c);
  a[i] = b.join(",");
  const aa = b.join(",");
  console.log(aa);
  console.log("a", a);
  // 把陣列b賦值給陣列a;
}
console.log(a.join("\n")); //返回1~100的二維數列
*/

// 二維陣列、矩陣轉置

let arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(arr[0][1]);
console.log(arr[2][0]);
