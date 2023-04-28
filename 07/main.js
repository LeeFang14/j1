// 7. 印出下圖，並轉 90°
//   ** **
//  *******
// *********
// *********
//  *******
//   *****
//    ***
//     *

// function star(n) {
//   for (let j = 1; j <= n; j++) {
//     let inner = "";
//     for (let i = 1; i <= j; i++) {
//       inner += "*";
//     }
//     console.log(inner);
//   }
// }

// star(5);

var a = [];
for (var i = 0; i < 8; i++) {
  //行迴圈
  let b = []; //輔助陣列
  let c;
  for (var j = 0; j < 9; j++) {
    //列迴圈
    b.push("*");
    c = b.join(","); //定義陣列b的元素值
  }

  console.log("c", c);
  // a[i] = b.join(",");
  // const aa = b.join(",");
  // console.log(aa);
  // console.log("a", a);
  //把陣列b賦值給陣列a
}
// console.log(a.join("\n")); //返回1~100的二維數列

// 二維陣列、矩陣轉置
