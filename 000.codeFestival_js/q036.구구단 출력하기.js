// 입출력

// 입력 : 2
// 출력 : 2 4 6 8 10 12 14 16 18

function solution(n) {
  for (let i = 1; i <= 9; i++) {
    console.log(n, "*", i, "=", n * i);
  }
}

solution(2);
