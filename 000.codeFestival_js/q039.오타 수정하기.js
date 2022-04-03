const text = "hqllo my namq is hyqwon";
const replaceWord = "e";
const searchWord = "q";

function solution(text, searchWord, replaceWord) {
  return text.split(searchWord).join(replaceWord);
}

console.log(solution(text, searchWord, replaceWord));
