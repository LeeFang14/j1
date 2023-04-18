// 7. 印出下圖，並轉 90°
function star(n) {
  for (let j = 1; j <= n; j++) {
    let inner = "";
    for (let i = 1; i <= j; i++) {
      inner += "*";
    }
    console.log(inner);
  }
}

star(5);

// 二維陣列、矩陣轉置
