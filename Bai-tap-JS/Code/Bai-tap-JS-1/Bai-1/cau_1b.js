/**
 * Bài 1b: Viết chương trình tính diện tích (S) và chu vi (P) của hình tròn khi nhập bán kính.
 */

function tinhChuViDienTichHinhTron(banKinh) {
    if (typeof banKinh !== 'number' || banKinh <= 0) {
        return 'Vui lòng nhập một số dương cho bán kính.';
    }

    const chuVi = 2 * Math.PI * banKinh;
    const dienTich = Math.PI * banKinh * banKinh;

    return `Hình tròn bán kính ${banKinh}: 
- Chu vi: ${chuVi.toFixed(2)} 
- Diện tích: ${dienTich.toFixed(2)}`;
}

// Mở comment để chạy test với input tĩnh
// const banKinhHinhTron = 3;
// console.log(tinhChuViDienTichHinhTron(banKinhHinhTron));

// Để nhận input từ người dùng trong môi trường Node.js
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Nhập bán kính hình tròn: ', (r) => {
    const result = tinhChuViDienTichHinhTron(parseFloat(r));
    console.log(result);
    readline.close();
});
