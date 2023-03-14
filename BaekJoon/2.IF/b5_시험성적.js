const fs = require('fs');
const input = fs.readFileSync("../../example.txt").toString().trim();

const answer = () => {
  if (input >= 90) return "A";
  if (input >= 80) return "B";
  if (input >= 70) return "C";
  if (input >= 60) return "D";
  return "F";
}

console.log(answer());
