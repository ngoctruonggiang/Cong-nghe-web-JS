/**
 * Bài 7: Nhập 1 mảng số nguyên có n phần tử.
 * a. Tìm số dương nhỏ nhất mảng
 * b. Sắp xếp mảng giảm dần
 * c. Đảo thứ tự mảng
 */

const readline = require('readline');

// a. Tìm số dương nhỏ nhất mảng
function timSoDuongNhoNhat(arr) {
    // Lọc ra các số dương
    const soDuong = arr.filter(x => x > 0);

    if (soDuong.length === 0) {
        return 'Mảng không có số dương.';
    }

    // Tìm số nhỏ nhất trong các số dương
    const minDuong = Math.min(...soDuong);
    return `Số dương nhỏ nhất trong mảng là: ${minDuong}`;
}

// b. Sắp xếp mảng giảm dần
function sapXepGiamDan(arr) {
    // Tạo bản sao để không thay đổi mảng gốc
    const sortedArr = [...arr].sort((a, b) => b - a);
    return `Mảng sau khi sắp xếp giảm dần: [${sortedArr.join(', ')}]`;
}

// c. Đảo thứ tự mảng
function daoNguocMang(arr) {
    // Tạo bản sao để không thay đổi mảng gốc
    const reversedArr = [...arr].reverse();
    return `Mảng sau khi đảo ngược: [${reversedArr.join(', ')}]`;
}


// Hàm chính để nhận input và thực thi
function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const inputArray = [];

    rl.question('Nhập số phần tử của mảng (n): ', (n) => {
        const count = parseInt(n, 10);
        if (isNaN(count) || count <= 0) {
            console.log('Vui lòng nhập một số nguyên dương.');
            rl.close();
            return;
        }

        function askElement(i) {
            if (i >= count) {
                // Sau khi nhập xong, thực hiện các yêu cầu
                console.log(`\nMảng gốc bạn đã nhập: [${inputArray.join(', ')}]`);
                
                // a. Tìm số dương nhỏ nhất
                console.log('---');
                console.log('a) ' + timSoDuongNhoNhat(inputArray));
                
                // b. Sắp xếp giảm dần
                console.log('---');
                console.log('b) ' + sapXepGiamDan(inputArray));

                // c. Đảo ngược mảng
                console.log('---');
                console.log('c) ' + daoNguocMang(inputArray));
                
                // Kiểm tra lại mảng gốc không bị thay đổi
                console.log('---');
                console.log(`Mảng gốc không đổi: [${inputArray.join(', ')}]`);

                rl.close();
                return;
            }

            rl.question(`Nhập phần tử thứ ${i + 1}: `, (val) => {
                const num = parseInt(val, 10);
                if (isNaN(num)) {
                    console.log('Vui lòng nhập một số nguyên. Thử lại.');
                    askElement(i); // Hỏi lại phần tử hiện tại
                } else {
                    inputArray.push(num);
                    askElement(i + 1); // Hỏi phần tử tiếp theo
                }
            });
        }

        askElement(0);
    });
}

// Chạy hàm chính
main();
