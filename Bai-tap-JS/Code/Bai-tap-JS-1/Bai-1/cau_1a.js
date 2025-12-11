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

const canhHinhVuong = 5;
console.log(tinhChuViDienTichHinhVuong(canhHinhVuong));

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Nhập chiều dài cạnh hình vuông: ", (canh) => {
  const result = tinhChuViDienTichHinhVuong(parseFloat(canh));
  console.log(result);
  readline.close();
});
