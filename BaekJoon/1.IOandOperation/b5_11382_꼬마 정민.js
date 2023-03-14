const fs = require('fs');
const input = fs.readFileSync("../../example.txt").toString().trim().split(" ");

console.log(input.reduce((acc, cur) => acc + Number(cur), 0))