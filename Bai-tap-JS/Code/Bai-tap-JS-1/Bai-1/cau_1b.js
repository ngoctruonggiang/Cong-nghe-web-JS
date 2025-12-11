function tinhChuViDienTichHinhTron(banKinh) {
  if (typeof banKinh !== "number" || banKinh <= 0) {
    return "Vui lòng nhập một số dương cho bán kính.";
  }

  const chuVi = 2 * Math.PI * banKinh;
  const dienTich = Math.PI * banKinh * banKinh;

  return `Hình tròn bán kính ${banKinh}: 
- Chu vi: ${chuVi.toFixed(2)} 
- Diện tích: ${dienTich.toFixed(2)}`;
}

const banKinhHinhTron = 3;
console.log(tinhChuViDienTichHinhTron(banKinhHinhTron));

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Nhập bán kính hình tròn: ", (r) => {
  const result = tinhChuViDienTichHinhTron(parseFloat(r));
  console.log(result);
  readline.close();
});
