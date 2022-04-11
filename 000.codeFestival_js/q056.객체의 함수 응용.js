// 데이터
const nationWidth = {
  korea: 220877,
  Rusia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};

// 출력
// England 22023

function solution(national) {
  const korea = national["korea"];
  delete national["korea"];
  const entry = Object.entries(national);
  const values = Object.values(national);
  let gap = Math.max.apply(null, values);
  let items = [];

  for (const key in entry) {
    if (gap > Math.abs(entry[key][1] - korea)) {
      gap = Math.abs(entry[key][1] - korea);
      items = entry[key];
    }
  }
  return items[0], items[1] - korea;
}

console.log(solution(nationWidth));
