// 입출력

// 입력 : AAABBBcccddd
// 출력 : aaabbbCCCDDD

function solution(str) {
  let int = str.toString().split("");
  let strArr = [];
  console.log(int);
  for (let i = 0; i < int.length; i++) {
    if (int[i] === int[i].toLowerCase()) {
      strArr.push(int[i].toUpperCase());
    } else {
      strArr.push(int[i].toLowerCase());
    }
  }
  return strArr;
}

console.log(solution("AAABBBcccddd"));
