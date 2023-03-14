const fs = require('fs');
const input = fs.readFileSync("../../example.txt").toString().trim().split("\n")

// 색종이의 크기는 10x10
const n = input[0] // 색종이의 수
const arr = Array.from(Array(101), () => Array(101).fill(0)) // 101x101 배열 생성
const dx = [0, 0, -1, 1]
const dy = [-1, 1, 0, 0]

for (let i = 1; i <= n; i++) {
  const inputArr = input[i].trim().split(" ")
  const x = Number(inputArr[0])
  const y = Number(inputArr[1])

  for (let i=x; i < x+10; i++) {
    for (let j=y; j < y+10; j++) {
      arr[i][j] = 1
    }
  }
}

let result = 0

for (let i=1; i<101; i++) {
  for (let j=1; j<101; j++) {
    if (arr[i][j] === 1) {
      let cnt = 0
      for (let k=0; k<4; k++) {
        const nx = i + dx[k]
        const ny = j + dy[k]
        if (arr[nx][ny] === 1) {
          cnt += 1
        }
      }
      if (cnt === 3) { // 상하좌우 3칸이 1로 채워져 있으면
        result += 1
      }
      if (cnt === 2) { // 모서리
        result += 2
      }
    }
  }
}

console.log(result)