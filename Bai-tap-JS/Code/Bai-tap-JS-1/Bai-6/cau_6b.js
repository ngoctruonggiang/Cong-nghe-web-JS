

/**
 * Bài 6b: Nhập a, b, c (số thực), giải phương trình bậc 2: ax^2 + bx + c = 0.
 * Lưu ý có tất cả các trường hợp a = 0 và b = 0.
 */

function giaiPhuongTrinhBac2(a, b, c) {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    const numC = parseFloat(c);

    if (isNaN(numA) || isNaN(numB) || isNaN(numC)) {
        return 'Vui lòng nhập các số thực hợp lệ cho a, b, và c.';
    }

    let result = `Phương trình: ${numA}x^2 + ${numB}x + ${numC} = 0\n`;

    // Trường hợp a = 0, phương trình trở thành phương trình bậc 1: bx + c = 0
    if (numA === 0) {
        if (numB === 0) {
            if (numC === 0) {
                result += 'Phương trình có vô số nghiệm.';
            } else {
                result += 'Phương trình vô nghiệm.';
            }
        } else {
            const x = -numC / numB;
            result += `Đây là phương trình bậc 1, có một nghiệm duy nhất: x = ${x}`;
        }
        return result;
    }

    // Trường hợp a != 0, giải phương trình bậc 2
    const delta = numB * numB - 4 * numA * numC;

    if (delta > 0) {
        const x1 = (-numB + Math.sqrt(delta)) / (2 * numA);
        const x2 = (-numB - Math.sqrt(delta)) / (2 * numA);
        result += `Phương trình có hai nghiệm phân biệt:\nx1 = ${x1}\nx2 = ${x2}`;
    } else if (delta === 0) {
        const x = -numB / (2 * numA);
        result += `Phương trình có nghiệm kép: x1 = x2 = ${x}`;
    } else {
        result += 'Phương trình vô nghiệm (trong tập số thực).';
    }
    return result;
}


// Mở comment để chạy test với input tĩnh
// console.log(giaiPhuongTrinhBac2(1, -3, 2));  // x1=2, x2=1
// console.log(giaiPhuongTrinhBac2(1, 2, 1));   // x=-1
// console.log(giaiPhuongTrinhBac2(1, 2, 3));   // Vô nghiệm
// console.log(giaiPhuongTrinhBac2(0, 2, -4));  // PT bậc 1, x=2
// console.log(giaiPhuongTrinhBac2(0, 0, 5));   // Vô nghiệm
// console.log(giaiPhuongTrinhBac2(0, 0, 0));   // Vô số nghiệm

// Để nhận input từ người dùng trong môi trường Node.js
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Nhập hệ số a: ', a => {
    readline.question('Nhập hệ số b: ', b => {
        readline.question('Nhập hệ số c: ', c => {
            const result = giaiPhuongTrinhBac2(a, b, c);
            console.log(result);
            readline.close();
        });
    });
});
