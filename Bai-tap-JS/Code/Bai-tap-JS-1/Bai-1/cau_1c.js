function tinhChuViDienTichTamGiac(a, b, c) {
  if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    return "Vui lòng nhập số dương cho cả 3 cạnh.";
  }

  if (a + b <= c || a + c <= b || b + c <= a) {
    return `Ba cạnh ${a}, ${b}, ${c} không thể tạo thành một tam giác.`;
  }

  const chuVi = a + b + c;

  const p = chuVi / 2;
  const dienTich = Math.sqrt(p * (p - a) * (p - b) * (p - c));

  return `Tam giác có 3 cạnh ${a}, ${b}, ${c}: \n- Chu vi: ${chuVi} \n- Diện tích: ${dienTich.toFixed(
    2
  )}`;
}

console.log(tinhChuViDienTichTamGiac(3, 4, 5));
console.log(tinhChuViDienTichTamGiac(5, 5, 5));
console.log(tinhChuViDienTichTamGiac(1, 2, 5));

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Nhập cạnh thứ nhất (a): ", (a) => {
  readline.question("Nhập cạnh thứ hai (b): ", (b) => {
    readline.question("Nhập cạnh thứ ba (c): ", (c) => {
      const result = tinhChuViDienTichTamGiac(
        parseFloat(a),
        parseFloat(b),
        parseFloat(c)
      );
      console.log(result);
      readline.close();
    });
  });
});
