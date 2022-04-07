// 입력 : 10 9 8 7 6 5 4 3 2 1
// 출력 : 10

function solution(nums) {
  return Math.max(...nums.split(" ").map(n => parseInt(n, 10)));
}

console.log(solution("1 10 9 8 7 6 5 4 3 2"));
