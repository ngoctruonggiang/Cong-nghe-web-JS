const readline = require("readline");

// a. Sắp xếp mảng theo thứ tự a, b, c
function sapXepAlphabet(arr) {
  // Tạo bản sao để không thay đổi mảng gốc
  // Dùng localeCompare để sắp xếp chuẩn xác cho nhiều ngôn ngữ
  const sortedArr = [...arr].sort((a, b) => a.localeCompare(b));
  return `Mảng sau khi sắp xếp theo alphabet: ["${sortedArr.join('", "')}"]`;
}

// b. Tìm vị trí của chuỗi dài nhất mảng
function timChuoiDaiNhat(arr) {
  if (arr.length === 0) {
    return "Mảng rỗng, không có chuỗi dài nhất.";
  }

  let viTri = -1;
  let doDaiMax = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > doDaiMax) {
      doDaiMax = arr[i].length;
      viTri = i;
    }
  }

  return `Chuỗi dài nhất là "${arr[viTri]}" (dài ${doDaiMax} ký tự) tại vị trí (index): ${viTri}`;
}

// Hàm chính để nhận input và thực thi
function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const inputArray = [];

  rl.question("Nhập số lượng chuỗi trong mảng (n): ", (n) => {
    const count = parseInt(n, 10);
    if (isNaN(count) || count <= 0) {
      console.log("Vui lòng nhập một số nguyên dương.");
      rl.close();
      return;
    }

    function askString(i) {
      if (i >= count) {
        // Sau khi nhập xong, thực hiện các yêu cầu
        console.log(
          `\nMảng chuỗi gốc bạn đã nhập: ["${inputArray.join('", "')}"]`
        );

        // a. Sắp xếp
        console.log("---");
        console.log("a) " + sapXepAlphabet(inputArray));

        // b. Tìm chuỗi dài nhất
        console.log("---");
        console.log("b) " + timChuoiDaiNhat(inputArray));

        rl.close();
        return;
      }

      rl.question(`Nhập chuỗi thứ ${i + 1}: `, (val) => {
        inputArray.push(val);
        askString(i + 1);
      });
    }

    askString(0);
  });
}

// Chạy hàm chính
main();
