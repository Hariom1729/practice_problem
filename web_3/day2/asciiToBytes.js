function asciiToBytes(value) {
  const arr = [];
  for (let i = 0; i < value.length; i++) {
    const char = value[i];
    arr.push(char.charCodeAt(0));
  }
  return arr;
}
const ascii = "Hariom";
const bytes = asciiToBytes(ascii);
console.log(bytes);
