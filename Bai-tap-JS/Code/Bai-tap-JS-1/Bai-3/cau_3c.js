function kiemTraSoHoanHao(n) {
  const num = parseInt(n, 10);

  if (isNaN(num) || num <= 1) {
    return `${n} không phải là số hoàn hảo.`;
  }

  let tongUoc = 1;

  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; i++) {
    if (num % i === 0) {
      tongUoc += i;
      if (i * i !== num) {
        tongUoc += num / i;
      }
    }
  }

  if (tongUoc === num) {
    return `${num} là số hoàn hảo.`;
  } else {
    return `${num} không phải là số hoàn hảo.`;
  }
}

console.log(kiemTraSoHoanHao(6)); // 1 + 2 + 3 = 6 -> Hoàn hảo
console.log(kiemTraSoHoanHao(28)); // 1 + 2 + 4 + 7 + 14 = 28 -> Hoàn hảo
console.log(kiemTraSoHoanHao(10)); // 1 + 2 + 5 = 8 -> Không hoàn hảo
console.log(kiemTraSoHoanHao(1));

// Để nhận input từ người dùng trong môi trường Node.js
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Nhập một số nguyên n: ", (n) => {
  const result = kiemTraSoHoanHao(n);
  console.log(result);
  readline.close();
});
