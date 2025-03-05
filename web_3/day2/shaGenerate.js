const crypto = require("crypto");
function shaGenerator(bytes) {
  let byte = bytes;
  return crypto.createHash("sha256").update(byte).digest("hex");
}
const input = "Hariom";
const sha = shaGenerator(input);
console.log(sha);
