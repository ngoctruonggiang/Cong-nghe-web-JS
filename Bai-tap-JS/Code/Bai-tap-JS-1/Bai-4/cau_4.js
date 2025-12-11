/**
 * Hàm kiểm tra một số có phải là số nguyên tố hay không.
 * @param {number} num - Số cần kiểm tra.
 * @returns {boolean} - True nếu là số nguyên tố, false nếu không.
 */
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }
  const limit = Math.sqrt(num);
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

/**
 * Hàm liệt kê các số nguyên tố từ 1 đến n.
 * @param {number} n - Giới hạn trên.
 * @returns {string} - Chuỗi kết quả.
 */
function lietKeSoNguyenTo(n) {
  const num = parseInt(n, 10);

  if (isNaN(num) || num < 2) {
    return `Không có số nguyên tố nào từ 1 đến ${n}.`;
  }

  const soNguyenToList = [];
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      soNguyenToList.push(i);
    }
  }

  if (soNguyenToList.length === 0) {
    return `Không có số nguyên tố nào trong khoảng từ 1 đến ${num}.`;
  }

  return `Các số nguyên tố từ 1 đến ${num} là: ${soNguyenToList.join(", ")}`;
}

console.log(lietKeSoNguyenTo(10));
console.log(lietKeSoNguyenTo(20));
console.log(lietKeSoNguyenTo(1));

// Để nhận input từ người dùng trong môi trường Node.js
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Nhập một số nguyên n (lớn hơn 1): ", (n) => {
  const result = lietKeSoNguyenTo(n);
  console.log(result);
  readline.close();
});
