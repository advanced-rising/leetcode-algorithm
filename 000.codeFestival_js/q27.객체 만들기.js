// 입력
// Yujin Hyewon
// 70 100

// 출력
// {'Yujin': 70, 'Hyewon': 100}

function solution(a, b) {
  const keys = a.split(" ");
  const values = b.split(" ");
  const obj = {};
  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = parseInt(values[i], 10);
  }
  return obj;
}
console.log(solution("Yujin Hyewon", "70 100"));
