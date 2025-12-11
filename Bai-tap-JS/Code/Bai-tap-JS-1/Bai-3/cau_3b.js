function kiemTraSoChinhPhuong(n) {
  const num = parseInt(n, 10);

  if (isNaN(num) || num < 0) {
    return `${n} không phải là số chính phương.`;
  }

  if (num === 0) {
    return `0 là số chính phương (0 * 0 = 0).`;
  }

  const sqrt = Math.sqrt(num);

  if (Number.isInteger(sqrt)) {
    return `${num} là số chính phương (vì ${sqrt} * ${sqrt} = ${num}).`;
  } else {
    return `${num} không phải là số chính phương.`;
  }
}

console.log(kiemTraSoChinhPhuong(0));
console.log(kiemTraSoChinhPhuong(1));
console.log(kiemTraSoChinhPhuong(4));
console.log(kiemTraSoChinhPhuong(9));
console.log(kiemTraSoChinhPhuong(10));
console.log(kiemTraSoChinhPhuong(-4));

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Nhập một số nguyên n: ", (n) => {
  const result = kiemTraSoChinhPhuong(n);
  console.log(result);
  readline.close();
});
