function solution(value) {
  const name = value;
  return console.log(`안녕하세요. 저는 ${name}입니다.`);
}

solution("김다정");

var middleNode = function (head) {
  const arrNums = head.length;
  let headMid = Math.floor(arrNums / 2);
  for (let i = 0; i < headMid; i++) {
    head.shift();
  }
  return head;
};

console.log(middleNode([1, 2, 3, 4, 5]));
