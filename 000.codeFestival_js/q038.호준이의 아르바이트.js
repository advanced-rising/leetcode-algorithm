// 입출력

// 입력 : 97 86 75 66 55 97 85 97 97 95
// 출력 : 6

function solution(arr) {
  const name = arr.split(" ").sort((a, b) => b - a);
  const set = new Set(name);
  const copy = [...set];

  let result = 0;
  for (let i = 0; i < name.length; i++) {
    for (let j = 0; j < 3; j++) {
      if (name[i].includes(copy[j])) result += 1;
    }
  }
  return result;
}

console.log(solution("97 86 75 66 55 97 85 97 97 95"));
