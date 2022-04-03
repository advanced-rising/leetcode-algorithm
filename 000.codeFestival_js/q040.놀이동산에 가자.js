// 입력
// 50
// 5
// 20
// 20
// 20
// 20
// 20

// 출력
// 2

function solution(limit, people, weight) {
  let total = 0;
  let count = 0;
  for (let i = 1; i <= people; i++) {
    total += weight[i];
    if (total <= limit) count = i;
  }
  return count;
}

const limit = 50;
const people = 5;
const weight = [20, 20, 20, 20, 20];

console.log(solution(limit, people, weight));
