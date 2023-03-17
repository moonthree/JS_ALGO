const input = require('fs').readFileSync('../../example.txt').toString().trim().split('\n');

// N : 내리는 위치
// K : 내구도 0이 K개 이상이면 종료
// 올리는 위치는 arr[0]
const N = Number(input[0]);

const line = new Array(4)
const arr = input[1].split(' ').map(Number)

console.log(N)
console.log(line)
arr.forEach((el) => {
  line[el] =
})
