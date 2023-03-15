const fs = require('fs');
const input = fs.readFileSync("../../example.txt").toString().trim().split("\n")

const arr = Array.from(Array(16), () => Array(16).fill(null)) // 16x16 배열 생성

for (let i=0; i<arr.length; i++) {
  if (input[i] !== undefined) {
    const inputArr = input[i].split('')
    for (let j=0; j<inputArr.length; j++){
      arr[i][j] = inputArr[j]
    }
  }
}

let answer = ''

for (let i=0; i<arr.length; i++) {
  for (let j=0; j<arr.length; j++) {
    if (arr[j][i] !== null) {
      answer += arr[j][i]
    }
  }
}

console.log(answer)