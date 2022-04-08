function solution(arr) {
  arr.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return "NO";
    }
  }
  return "YES";
}

const input1 = [8, 2, 3, 4, 5, 6];
const input2 = [1, 2, 3, 4, 5, 6];
console.log(solution(input1));
