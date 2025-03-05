// Here i am converting bytes to character

function bytesToAscii(byte) {
  return new TextDecoder().decode(byte);
}
const bytes = new Uint8Array([72, 97, 114, 105, 111, 109]);
const ascii = bytesToAscii(bytes);
console.log(ascii);
