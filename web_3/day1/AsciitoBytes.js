// let ascii ="Hariom";
//let bytes=new TextEncoder().encode(ascii);
//console.log(bytes);
  

//by using loop method 
let ascii="Hariom";
const result=[];
for (let i=0;i<ascii.length;i++){
result.push(ascii.charCodeAt(i));
}
console.log(result);

