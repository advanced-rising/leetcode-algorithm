// 입력
// 원범 원범 혜원 혜원 혜원 혜원 유진 유진

// 출력
// 혜원(이)가 총 4표로 반장이 되었습니다.

function solution(params) {
  const name = params.split(" ");
  let result = {};
  let winner = "";

  for (let index in name) {
    let val = name[index];
    result[val] = result[val] === undefined ? 1 : (result[val] = result[val] + 1);
  }

  winner = Object.keys(result).reduce(function (a, b) {
    return result[a] > result[b] ? a : b;
  });
  return `${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`;
}
console.log(solution("원범 원범 혜원 혜원 혜원 혜원 유진 유진"));
