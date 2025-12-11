
/**
 * Bài 3b: Nhập n nguyên, kiểm tra n có phải là số chính phương.
 * Số chính phương là bình phương của một số nguyên.
 */

function kiemTraSoChinhPhuong(n) {
    const num = parseInt(n, 10);

    if (isNaN(num) || num < 0) {
        return `${n} không phải là số chính phương.`;
    }
    
    if (num === 0) {
        return `0 là số chính phương (0 * 0 = 0).`;
    }

    const sqrt = Math.sqrt(num);
    
    // Kiểm tra xem căn bậc hai có phải là số nguyên không
    if (Number.isInteger(sqrt)) {
        return `${num} là số chính phương (vì ${sqrt} * ${sqrt} = ${num}).`;
    } else {
        return `${num} không phải là số chính phương.`;
    }
}

// Mở comment để chạy test với input tĩnh
// console.log(kiemTraSoChinhPhuong(0));
// console.log(kiemTraSoChinhPhuong(1));
// console.log(kiemTraSoChinhPhuong(4));
// console.log(kiemTraSoChinhPhuong(9));
// console.log(kiemTraSoChinhPhuong(10));
// console.log(kiemTraSoChinhPhuong(-4));


// Để nhận input từ người dùng trong môi trường Node.js
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Nhập một số nguyên n: ', n => {
    const result = kiemTraSoChinhPhuong(n);
    console.log(result);
    readline.close();
});
