import React, { useState } from "react";
import './App.css';
import dogImg from './assets/dog.jpg';
import catImg from './assets/cat.jpg';

interface Question {
  question: string;
  options: string[];
}

const questions: Question[] = [
  {
    question: "당신은 활동적인 편인가요?",
    options: ["매우 활동적이에요", "보통이에요", "조용한 걸 좋아해요"]
  },
  {
    question: "집에 혼자 있는 시간이 많은가요?",
    options: ["집에 자주 있어요", "보통이에요", "자주 외출해요"]
  },
  {
    question: "동물을 산책시키고 싶은 빈도는?",
    options: ["자주 산책하고 싶어요", "가끔 산책하고 싶어요", "집에서만 키우고 싶어요"]
  },
  {
    question: "털 날림에 얼마나 민감한가요?",
    options: ["매우 민감해요", "약간 민감해요", "괜찮아요"]
  },
  {
    question: "동물과의 교감은 어느 정도 원하시나요?",
    options: ["많이 교감하고 싶어요", "보통이에요", "적당한 거리가 좋아요"]
  },
  {
    question: "집에 알레르기 있는 가족이 있나요?",
    options: ["심한 알레르기 있어요", "약간 있어요", "없어요"]
  },
  {
    question: "짖는 소리에 얼마나 민감한가요?",
    options: ["매우 민감해요", "약간 민감해요", "괜찮아요"]
  }
];

function shuffle<T>(array: T[]): T[] {
  let arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// 각 질문별로 0: 강아지, 1: 중립, 2: 고양이 쪽으로 점수 부여
function getResult(answers: number[]): string {
  let dogScore = 0;
  let catScore = 0;
  // 활동성
  if (answers[0] === 0) dogScore += 2;
  else if (answers[0] === 1) { dogScore += 1; catScore += 1; }
  else catScore += 2;
  // 집에 있는 시간
  if (answers[1] === 0) dogScore += 2;
  else if (answers[1] === 1) { dogScore += 1; catScore += 1; }
  else catScore += 2;
  // 산책
  if (answers[2] === 0) dogScore += 2;
  else if (answers[2] === 1) { dogScore += 1; catScore += 1; }
  else catScore += 2;
  // 털 민감도 (고양이 쪽이 더 털이 적음)
  if (answers[3] === 0) catScore += 2;
  else if (answers[3] === 1) { dogScore += 1; catScore += 1; }
  else dogScore += 2;
  // 교감
  if (answers[4] === 0) dogScore += 2;
  else if (answers[4] === 1) { dogScore += 1; catScore += 1; }
  else catScore += 2;
  // 알레르기 (고양이 쪽이 더 적합)
  if (answers[5] === 0) catScore += 2;
  else if (answers[5] === 1) { dogScore += 1; catScore += 1; }
  else dogScore += 2;
  // 짖는 소리 (고양이 쪽이 조용함)
  if (answers[6] === 0) catScore += 2;
  else if (answers[6] === 1) { dogScore += 1; catScore += 1; }
  else dogScore += 2;
  return dogScore > catScore ? "강아지" : "고양이";
}

export default function Survey() {
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]); // 실제 선택한 옵션 텍스트 저장
  const [result, setResult] = useState<string | null>(null);
  const [shuffledOptionsList] = useState<string[][]>(() => questions.map(q => shuffle(q.options)));

  const handleOptionClick = (optionIdx: number) => {
    const selectedText = shuffledOptionsList[step][optionIdx];
    const newAnswers = [...answers, selectedText];
    if (step < questions.length - 1) {
      setAnswers(newAnswers);
      setStep(step + 1);
    } else {
      // 실제 점수 계산을 위해 텍스트를 인덱스로 변환
      const answerIndexes = newAnswers.map((text, idx) =>
        questions[idx].options.indexOf(text)
      );
      setResult(getResult(answerIndexes));
    }
  };

  if (result) {
    return (
      <div className="survey-container">
        <div className="survey-result-title">당신에게 어울리는 애완동물은?</div>
        <img
          src={result === "강아지" ? dogImg : catImg}
          alt={result}
          style={{ width: 240, height: 240, objectFit: 'contain', margin: '16px auto' }}
        />
        <div className={`survey-result-animal ${result === "강아지" ? "dog" : "cat"}`}>{result}</div>
        <div className="survey-result-desc">
          {result === "강아지"
            ? "활동적이고 교감이 많은 라이프스타일에 강아지가 잘 어울려요!"
            : "조용하고 독립적인 성향, 혹은 집에 자주 없는 분께는 고양이가 잘 어울려요!"}
        </div>
      </div>
    );
  }

  return (
    <div className="survey-container">
      <div className="survey-title">당신에게 더 잘 맞는 반려동물은 강아지일까, 고양이일까?</div>
      <div className="survey-question">{questions[step].question}</div>
      {shuffledOptionsList[step].map((opt, idx) => (
        <button
          key={idx}
          className="survey-btn"
          onClick={() => handleOptionClick(idx)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
