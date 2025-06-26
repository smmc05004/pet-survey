// 설문 관련 유틸 함수
export function shuffle<T>(array: T[]): T[] {
  let arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function getResult(answers: number[]): "dog" | "cat" {
  let dogScore = 0;
  let catScore = 0;
  if (answers[0] === 0) dogScore += 2;
  else if (answers[0] === 1) { dogScore += 1; catScore += 1; }
  else catScore += 2;
  if (answers[1] === 0) dogScore += 2;
  else if (answers[1] === 1) { dogScore += 1; catScore += 1; }
  else catScore += 2;
  if (answers[2] === 0) dogScore += 2;
  else if (answers[2] === 1) { dogScore += 1; catScore += 1; }
  else catScore += 2;
  if (answers[3] === 0) catScore += 2;
  else if (answers[3] === 1) { dogScore += 1; catScore += 1; }
  else dogScore += 2;
  if (answers[4] === 0) dogScore += 2;
  else if (answers[4] === 1) { dogScore += 1; catScore += 1; }
  else catScore += 2;
  if (answers[5] === 0) catScore += 2;
  else if (answers[5] === 1) { dogScore += 1; catScore += 1; }
  else dogScore += 2;
  if (answers[6] === 0) catScore += 2;
  else if (answers[6] === 1) { dogScore += 1; catScore += 1; }
  else dogScore += 2;
  return dogScore > catScore ? "dog" : "cat";
}
