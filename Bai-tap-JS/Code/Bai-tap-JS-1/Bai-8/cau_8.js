const readline = require("readline");

/**
 * Hàm tạo và hiển thị tam giác số, đồng thời trả về cấu trúc dữ liệu của tam giác.
 * @param {number} n - Chiều cao của tam giác.
 * @returns {number[][]} - Mảng 2 chiều chứa tam giác số.
 */
function taoTamGiacSo(n) {
  console.log(`
Tam giác số với chiều cao ${n}:`);
  const triangle = [];
  let currentNumber = 1;
  for (let i = 1; i <= n; i++) {
    const row = [];
    let rowString = "";
    for (let j = 1; j <= i; j++) {
      row.push(currentNumber);
      rowString += currentNumber + " ";
      currentNumber++;
    }
    triangle.push(row);
    console.log(rowString.trim());
  }
  return triangle;
}

// a. Tính tổng các số chẵn trong tam giác
function tongSoChan(triangle) {
  let sum = 0;
  for (const row of triangle) {
    for (const num of row) {
      if (num % 2 === 0) {
        sum += num;
      }
    }
  }
  return `a) Tổng các số chẵn trong tam giác: ${sum}`;
}

// b. Tính tổng cột đầu tiên
function tongCotDauTien(triangle) {
  let sum = 0;
  for (const row of triangle) {
    if (row.length > 0) {
      sum += row[0];
    }
  }
  return `b) Tổng các số ở cột đầu tiên: ${sum}`;
}

// c. Tính tổng dòng cuối cùng
function tongDongCuoiCung(triangle) {
  if (triangle.length === 0) {
    return `c) Tổng dòng cuối cùng: 0`;
  }
  const lastRow = triangle[triangle.length - 1];
  const sum = lastRow.reduce((acc, curr) => acc + curr, 0);
  return `c) Tổng các số ở dòng cuối cùng: ${sum}`;
}

// Hàm chính
function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Nhập chiều cao tam giác n (0 < n < 10): ", (nStr) => {
    const n = parseInt(nStr, 10);

    if (isNaN(n) || n <= 0 || n >= 10) {
      console.log("Vui lòng nhập một số nguyên trong khoảng (0, 10).");
      rl.close();
      return;
    }

    const triangle = taoTamGiacSo(n);

    console.log("\n--- KẾT QUẢ TÍNH TOÁN ---");
    console.log(tongSoChan(triangle));
    console.log(tongCotDauTien(triangle));
    console.log(tongDongCuoiCung(triangle));

    rl.close();
  });
}

main();
