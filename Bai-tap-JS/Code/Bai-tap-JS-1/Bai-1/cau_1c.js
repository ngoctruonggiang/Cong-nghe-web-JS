/**
 * Bài 1c: Viết chương trình tính diện tích (S) và chu vi (P) của tam giác khi nhập 3 cạnh.
 */

function tinhChuViDienTichTamGiac(a, b, c) {
    if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
        return 'Vui lòng nhập số dương cho cả 3 cạnh.';
    }

    // Kiểm tra điều kiện tồn tại của tam giác
    if (a + b <= c || a + c <= b || b + c <= a) {
        return `Ba cạnh ${a}, ${b}, ${c} không thể tạo thành một tam giác.`;
    }

    const chuVi = a + b + c;
    
    // Sử dụng công thức Heron để tính diện tích
    const p = chuVi / 2; // Nửa chu vi
    const dienTich = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return `Tam giác có 3 cạnh ${a}, ${b}, ${c}: \n- Chu vi: ${chuVi} \n- Diện tích: ${dienTich.toFixed(2)}`;
}

// Mở comment để chạy test với input tĩnh
// console.log(tinhChuViDienTichTamGiac(3, 4, 5));
// console.log(tinhChuViDienTichTamGiac(5, 5, 5));
// console.log(tinhChuViDienTichTamGiac(1, 2, 5));


// Để nhận input từ người dùng trong môi trường Node.js
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Nhập cạnh thứ nhất (a): ', a => {
    readline.question('Nhập cạnh thứ hai (b): ', b => {
        readline.question('Nhập cạnh thứ ba (c): ', c => {
            const result = tinhChuViDienTichTamGiac(parseFloat(a), parseFloat(b), parseFloat(c));
            console.log(result);
            readline.close();
        });
    });
});
