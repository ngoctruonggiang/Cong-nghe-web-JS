/**
 * Bài 1a: Viết chương trình tính diện tích (S) và chu vi (P) của hình vuông khi nhập chiều dài cạnh.
 */

function tinhChuViDienTichHinhVuong(canh) {
  if (typeof canh !== "number" || canh <= 0) {
    return "Vui lòng nhập một số dương cho chiều dài cạnh.";
  }

  const chuVi = 4 * canh;
  const dienTich = canh * canh;

  return `Hình vuông cạnh ${canh}: 
- Chu vi: ${chuVi} 
- Diện tích: ${dienTich}`;
}

// Mở comment để chạy test với input tĩnh
const canhHinhVuong = 5;
console.log(tinhChuViDienTichHinhVuong(canhHinhVuong));

// Để nhận input từ người dùng trong môi trường Node.js, bạn có thể dùng code sau:
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Nhập chiều dài cạnh hình vuông: ", (canh) => {
  const result = tinhChuViDienTichHinhVuong(parseFloat(canh));
  console.log(result);
  readline.close();
});
