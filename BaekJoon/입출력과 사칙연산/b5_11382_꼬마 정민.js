const fs = require('fs');
const input = fs.readFileSync("b5_11382.txt").toString().trim().split(" ");

console.log(input.reduce((acc, cur) => acc + Number(cur), 0))