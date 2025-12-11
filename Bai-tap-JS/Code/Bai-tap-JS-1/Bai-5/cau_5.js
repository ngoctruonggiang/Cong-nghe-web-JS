

/**
 * Bài 5: Nhập n nguyên, tính S = -1 + 11 – 22 + 33 – 44 +…+ (-1)^n * (11*(n-1))
 *
 * Phân tích quy luật:
 * - Số hạng đầu tiên (n=1) là -1.
 * - Với n >= 2, số hạng thứ n là: (-1)^n * (11 * (n-1))
 *   - n=2: (-1)^2 * (11*1) = 11
 *   - n=3: (-1)^3 * (11*2) = -22
 *   - n=4: (-1)^4 * (11*3) = 33
 *   - ...
 * Công thức tổng quát cho số hạng thứ i (với i > 1) là (-1)^i * 11 * (i-1).
 *
 * Bài toán có vẻ có một sự nhầm lẫn trong công thức cuối cùng `(-1)n+1(nn)`.
 * Dựa trên dãy số, quy luật hợp lý nhất là tổng S(n) được tính trên n số hạng.
 */

function tinhTong(n) {
    const num = parseInt(n, 10);

    if (isNaN(num) || num <= 0) {
        return 'Vui lòng nhập một số nguyên dương.';
    }

    if (num === 1) {
        return -1;
    }

    let tong = -1;
    for (let i = 2; i <= num; i++) {
        const soHang = Math.pow(-1, i) * 11 * (i - 1);
        tong += soHang;
    }

    return tong;
}


function tinhTongDaySo(nStr) {
    const n = parseInt(nStr, 10);
    if (isNaN(n) || n <= 0) {
        return "Vui lòng nhập một số nguyên dương.";
    }

    let sum = 0;
    let series = [];

    // Tính toán dựa trên n số hạng
    if (n >= 1) {
        sum = -1;
        series.push(-1);
    }
    for (let i = 2; i <= n; i++) {
        let term = Math.pow(-1, i) * 11 * (i - 1);
        sum += term;
        series.push(term > 0 ? `+${term}` : `${term}`);
    }
    
    return `Dãy số với ${n} phần tử là: ${series.join(' ')}
Tổng S = ${sum}`;
}


// Mở comment để chạy test với input tĩnh
// console.log(tinhTongDaySo("1"));
// console.log(tinhTongDaySo("2")); // -1 + 11 = 10
// console.log(tinhTongDaySo("3")); // -1 + 11 - 22 = -12
// console.log(tinhTongDaySo("4")); // -1 + 11 - 22 + 33 = 21
// console.log(tinhTongDaySo("5")); // -1 + 11 - 22 + 33 - 44 = -23

// Để nhận input từ người dùng trong môi trường Node.js
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Nhập số nguyên n (số phần tử của dãy): ', n => {
    const result = tinhTongDaySo(n);
    console.log(result);
    readline.close();
});
