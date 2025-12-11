function kiemTraSoNguyenTo(n) {
  const num = parseInt(n, 10);

  if (isNaN(num) || num <= 1) {
    return `${n} không phải là số nguyên tố.`;
  }

  if (num === 2) {
    return `${num} là số nguyên tố.`;
  }

  if (num % 2 === 0) {
    return `${num} không phải là số nguyên tố.`;
  }

  const limit = Math.sqrt(num);
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) {
      return `${num} không phải là số nguyên tố.`;
    }
  }

  return `${num} là số nguyên tố.`;
}

console.log(kiemTraSoNguyenTo(1));
console.log(kiemTraSoNguyenTo(2));
console.log(kiemTraSoNguyenTo(7));
console.log(kiemTraSoNguyenTo(10));
console.log(kiemTraSoNguyenTo(97));

// Để nhận input từ người dùng trong môi trường Node.js
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Nhập một số nguyên n: ", (n) => {
  const result = kiemTraSoNguyenTo(n);
  console.log(result);
  readline.close();
});
