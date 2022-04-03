function solution(number) {
  for (let i = 2; i < number; i++) {
    let result = number % i;
    if (result === 0) return "NO";
  }
  if (number === 1) return "NO";
  return "YES";
}

console.log(solution(5));
