
/**
 * Bài 3c: Nhập n nguyên, kiểm tra n có phải là số hoàn hảo.
 * Số hoàn hảo là số nguyên dương mà tổng các ước nguyên dương thực sự của nó (các ước trừ chính nó) bằng chính nó.
 */

function kiemTraSoHoanHao(n) {
    const num = parseInt(n, 10);

    if (isNaN(num) || num <= 1) {
        return `${n} không phải là số hoàn hảo.`;
    }

    let tongUoc = 1; // Bắt đầu với 1 vì 1 luôn là ước

    // Tìm các ước từ 2 đến căn bậc hai của n
    const limit = Math.sqrt(num);
    for (let i = 2; i <= limit; i++) {
        if (num % i === 0) {
            tongUoc += i;
            // Nếu i không phải là căn bậc hai của num, cộng cả ước đối xứng
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

// Mở comment để chạy test với input tĩnh
// console.log(kiemTraSoHoanHao(6));   // 1 + 2 + 3 = 6 -> Hoàn hảo
// console.log(kiemTraSoHoanHao(28));  // 1 + 2 + 4 + 7 + 14 = 28 -> Hoàn hảo
// console.log(kiemTraSoHoanHao(10));  // 1 + 2 + 5 = 8 -> Không hoàn hảo
// console.log(kiemTraSoHoanHao(1));

// Để nhận input từ người dùng trong môi trường Node.js
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Nhập một số nguyên n: ', n => {
    const result = kiemTraSoHoanHao(n);
    console.log(result);
    readline.close();
});
