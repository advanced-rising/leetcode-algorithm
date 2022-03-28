function solution(value) {
  let sum = 0;
  for (let i = 0; i < value.length; i++) {
    sum += value[i];
  }
  return (sum / value.length).toFixed(2);
}

console.log(solution([20, 20, 40]));
