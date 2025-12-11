function giaiPhuongTrinhBac1(a, b) {
  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if (isNaN(numA) || isNaN(numB)) {
    return "Vui lòng nhập các số thực hợp lệ cho a và b.";
  }

  let result = `Phương trình: ${numA}x + ${numB} = 0\n`;

  if (numA === 0) {
    if (numB === 0) {
      result += "Phương trình có vô số nghiệm.";
    } else {
      result += "Phương trình vô nghiệm.";
    }
  } else {
    const x = -numB / numA;
    result += `Phương trình có một nghiệm duy nhất: x = ${x}`;
  }
  return result;
}

console.log(giaiPhuongTrinhBac1(2, -4)); // x = 2
console.log(giaiPhuongTrinhBac1(0, 5)); // Vô nghiệm
console.log(giaiPhuongTrinhBac1(0, 0)); // Vô số nghiệm
console.log(giaiPhuongTrinhBac1(5, 0)); // x = 0

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Nhập hệ số a: ", (a) => {
  readline.question("Nhập hệ số b: ", (b) => {
    const result = giaiPhuongTrinhBac1(a, b);
    console.log(result);
    readline.close();
  });
});
