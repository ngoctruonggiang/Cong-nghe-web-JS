function tinhTong(n) {
  const num = parseInt(n, 10);

  if (isNaN(num) || num <= 0) {
    return "Vui lòng nhập một số nguyên dương.";
  }

  if (num === 1) {
    return -1;
  }

  let tong = -1;
  for (let i = 2; i <= num; i++) {
    const soHang = Math.pow(-1, i) * 11 * (i - 1);
    tong += soHang;
  }

  return tong;
}

function tinhTongDaySo(nStr) {
  const n = parseInt(nStr, 10);
  if (isNaN(n) || n <= 0) {
    return "Vui lòng nhập một số nguyên dương.";
  }

  let sum = 0;
  let series = [];

  // Tính toán dựa trên n số hạng
  if (n >= 1) {
    sum = -1;
    series.push(-1);
  }
  for (let i = 2; i <= n; i++) {
    let term = Math.pow(-1, i) * 11 * (i - 1);
    sum += term;
    series.push(term > 0 ? `+${term}` : `${term}`);
  }

  return `Dãy số với ${n} phần tử là: ${series.join(" ")}
Tổng S = ${sum}`;
}

console.log(tinhTongDaySo("1"));
console.log(tinhTongDaySo("2")); // -1 + 11 = 10
console.log(tinhTongDaySo("3")); // -1 + 11 - 22 = -12
console.log(tinhTongDaySo("4")); // -1 + 11 - 22 + 33 = 21
console.log(tinhTongDaySo("5")); // -1 + 11 - 22 + 33 - 44 = -23

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Nhập số nguyên n (số phần tử của dãy): ", (n) => {
  const result = tinhTongDaySo(n);
  console.log(result);
  readline.close();
});
