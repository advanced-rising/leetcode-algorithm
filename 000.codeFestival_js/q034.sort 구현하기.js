// 입출력

// 입력 : 176 156 155 165 166 169
// 출력 : NO

// 입력 : 155 156 165 166 169 176
// 출력 : YES

function solution(nums) {
  let sorted = "";

  sorted = nums
    .split(" ")
    .sort((a, b) => a - b)
    .join(" ");

  return nums === sorted ? "Yes" : "No";
}

console.log(solution("176 156 155 165 166 169"));
console.log(solution("155 156 165 166 169 176"));
// console.log(solution([176, 156, 155, 165, 166, 169]));
// console.log(solution([155, 156, 165, 166, 169, 176]));
