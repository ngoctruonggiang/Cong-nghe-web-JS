/**
 * Bài 2: Nhập 2 số tìm bội số chung nhỏ nhất (BSCNN) và ước số chung lớn nhất (USCLN).
 */

/**
 * Hàm tìm Ước số chung lớn nhất (USCLN) sử dụng thuật toán Euclid.
 * @param {number} a - Số nguyên thứ nhất.
 * @param {number} b - Số nguyên thứ hai.
 * @returns {number} - USCLN của a và b.
 */
function timUSCLN(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return NaN;
    }
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

/**
 * Hàm tìm Bội số chung nhỏ nhất (BSCNN).
 * BSCNN(a, b) = (|a * b|) / USCLN(a, b)
 * @param {number} a - Số nguyên thứ nhất.
 * @param {number} b - Số nguyên thứ hai.
 * @returns {number} - BSCNN của a và b.
 */
function timBSCNN(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return NaN;
    }
    if (a === 0 || b === 0) {
        return 0;
    }
    const uscln = timUSCLN(a, b);
    return Math.abs(a * b) / uscln;
}

function timUSCLNvaBSCNN(a, b) {
    const numA = parseInt(a, 10);
    const numB = parseInt(b, 10);

    if (isNaN(numA) || isNaN(numB)) {
        return 'Vui lòng nhập hai số nguyên hợp lệ.';
    }

    const uscln = timUSCLN(numA, numB);
    const bscnn = timBSCNN(numA, numB);

    return `Với hai số ${numA} và ${numB}: \n- Ước số chung lớn nhất (USCLN): ${uscln} \n- Bội số chung nhỏ nhất (BSCNN): ${bscnn}`;
}

// Mở comment để chạy test với input tĩnh
// console.log(timUSCLNvaBSCNN(4, 6));
// console.log(timUSCLNvaBSCNN(7, 5));
// console.log(timUSCLNvaBSCNN(0, 5));


// Để nhận input từ người dùng trong môi trường Node.js
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Nhập số thứ nhất (a): ', a => {
    readline.question('Nhập số thứ hai (b): ', b => {
        const result = timUSCLNvaBSCNN(a, b);
        console.log(result);
        readline.close();
    });
});
