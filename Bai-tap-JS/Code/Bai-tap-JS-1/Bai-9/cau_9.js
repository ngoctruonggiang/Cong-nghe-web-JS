const readline = require("readline");

// a. Hàm trả về chuỗi đảo ngược
function daoNguocChuoi(str) {
  if (typeof str !== "string") {
    return "Input không hợp lệ, không phải là chuỗi.";
  }
  // Tách chuỗi thành mảng các ký tự -> đảo ngược mảng -> nối lại thành chuỗi
  return str.split("").reverse().join("");
}

// b. Hàm trả về chuỗi in hoa
function chuyenInHoa(str) {
  if (typeof str !== "string") {
    return "Input không hợp lệ, không phải là chuỗi.";
  }
  return str.toUpperCase();
}

// Hàm chính
function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Nhập vào một chuỗi bất kỳ: ", (inputStr) => {
    if (!inputStr) {
      console.log("Bạn chưa nhập chuỗi nào.");
      rl.close();
      return;
    }

    console.log(`\nChuỗi gốc: "${inputStr}"`);
    console.log("---");

    // a. Đảo ngược
    const chuoiDaoNguoc = daoNguocChuoi(inputStr);
    console.log(`a) Chuỗi đảo ngược: "${chuoiDaoNguoc}"`);

    // b. In hoa
    const chuoiInHoa = chuyenInHoa(inputStr);
    console.log(`b) Chuỗi in hoa: "${chuoiInHoa}"`);

    rl.close();
  });
}

// Chạy hàm chính
main();

const testStr = "Hello World";
console.log(`Chuỗi gốc: "${testStr}"`);
console.log(`a) Chuỗi đảo ngược: "${daoNguocChuoi(testStr)}"`);
console.log(`b) Chuỗi in hoa: "${chuyenInHoa(testStr)}"`);
