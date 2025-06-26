import React, { useState } from "react";
import './App.css';
import dogImg from './assets/dog.jpg';
import catImg from './assets/cat.jpg';

const ko = {
  title: "당신에게 더 잘 맞는 반려동물은 강아지일까, 고양이일까?",
  questions: [
    { q: "당신은 활동적인 편인가요?", a: ["매우 활동적이에요", "보통이에요", "조용한 걸 좋아해요"] },
    { q: "집에 혼자 있는 시간이 많은가요?", a: ["집에 자주 있어요", "보통이에요", "자주 외출해요"] },
    { q: "동물을 산책시키고 싶은 빈도는?", a: ["자주 산책하고 싶어요", "가끔 산책하고 싶어요", "집에서만 키우고 싶어요"] },
    { q: "털 날림에 얼마나 민감한가요?", a: ["매우 민감해요", "약간 민감해요", "괜찮아요"] },
    { q: "동물과의 교감은 어느 정도 원하시나요?", a: ["많이 교감하고 싶어요", "보통이에요", "적당한 거리가 좋아요"] },
    { q: "집에 알레르기 있는 가족이 있나요?", a: ["심한 알레르기 있어요", "약간 있어요", "없어요"] },
    { q: "짖는 소리에 얼마나 민감한가요?", a: ["매우 민감해요", "약간 민감해요", "괜찮아요"] }
  ],
  result: {
    dog: "활동적이고 교감이 많은 라이프스타일에 강아지가 잘 어울려요!",
    cat: "조용하고 독립적인 성향, 혹은 집에 자주 없는 분께는 고양이가 잘 어울려요!"
  },
  label: { dog: "강아지", cat: "고양이" },
  resultTitle: "당신에게 어울리는 애완동물은?",
  selectLang: "언어 선택"
};

const en = {
  title: "Which pet suits you better: Dog or Cat?",
  questions: [
    { q: "Are you an active person?", a: ["Very active", "Average", "Prefer calmness"] },
    { q: "Do you spend a lot of time at home?", a: ["Mostly at home", "Average", "Often outside"] },
    { q: "How often do you want to walk your pet?", a: ["Very often", "Sometimes", "Prefer indoors only"] },
    { q: "How sensitive are you to shedding?", a: ["Very sensitive", "A bit sensitive", "Not sensitive"] },
    { q: "How much do you want to bond with your pet?", a: ["A lot", "Average", "Prefer some distance"] },
    { q: "Does anyone in your family have allergies?", a: ["Severe allergies", "Mild allergies", "No allergies"] },
    { q: "How sensitive are you to barking?", a: ["Very sensitive", "A bit sensitive", "Not sensitive"] }
  ],
  result: {
    dog: "A dog is perfect for an active lifestyle with lots of bonding!",
    cat: "A cat is great for those who are independent or often away from home!"
  },
  label: { dog: "Dog", cat: "Cat" },
  resultTitle: "Your ideal pet is...",
  selectLang: "Select language"
};

const langs = [
  { value: 'ko', label: '한국어' },
  { value: 'en', label: 'English' }
];

function shuffle<T>(array: T[]): T[] {
  let arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getResult(answers: number[]): "dog" | "cat" {
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

export default function Survey() {
  const browserLang = typeof navigator !== 'undefined' && navigator.language.startsWith('ko') ? 'ko' : 'en';
  const [lang, setLang] = useState<'ko' | 'en'>(browserLang);
  const dict = lang === 'ko' ? ko : en;
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<"dog" | "cat" | null>(null);
  const [shuffledOptionsList, setShuffledOptionsList] = useState<string[][]>(() => dict.questions.map(q => shuffle(q.a)));

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value as 'ko' | 'en';
    setLang(newLang);
    setStep(0);
    setAnswers([]);
    setResult(null);
    setShuffledOptionsList((newLang === 'ko' ? ko : en).questions.map(q => shuffle(q.a)));
  };

  const handleOptionClick = (optionIdx: number) => {
    const selectedText = shuffledOptionsList[step][optionIdx];
    const newAnswers = [...answers, selectedText];
    if (step < dict.questions.length - 1) {
      setAnswers(newAnswers);
      setStep(step + 1);
    } else {
      const answerIndexes = newAnswers.map((text, idx) =>
        dict.questions[idx].a.indexOf(text)
      );
      setResult(getResult(answerIndexes));
    }
  };

  // 커스텀 셀렉트 박스
  const CustomSelect = (
    <div style={{ position: 'relative', display: 'inline-block', minWidth: 120 }}>
      <label style={{ marginRight: 8, fontWeight: 500 }}>{dict.selectLang}</label>
      <select
        value={lang}
        onChange={handleLangChange}
        style={{
          appearance: 'none',
          WebkitAppearance: 'none',
          MozAppearance: 'none',
          background: '#f3f4f6',
          border: '1px solid #d1d5db',
          borderRadius: 6,
          padding: '6px 32px 6px 12px',
          fontSize: 16,
          fontWeight: 500,
          color: '#22223b',
          outline: 'none',
          cursor: 'pointer',
          minWidth: 90
        }}
      >
        {langs.map(l => <option key={l.value} value={l.value}>{l.label}</option>)}
      </select>
      <span style={{
        position: 'absolute',
        right: 10,
        top: '50%',
        transform: 'translateY(-50%)',
        pointerEvents: 'none',
        color: '#6b7280',
        fontSize: 18
      }}>▼</span>
    </div>
  );

  const Header = (
    <header style={{
      width: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      background: 'rgba(255,255,255,0.95)',
      borderBottom: '1px solid #e5e7eb',
      zIndex: 100,
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: '12px 24px',
      boxSizing: 'border-box',
      minHeight: 56
    }}>
      {CustomSelect}
    </header>
  );

  if (result) {
    return (
      <>
        {Header}
        <div style={{ height: 56 }} />
        <div className="survey-container">
          <div className="survey-result-title">{dict.resultTitle}</div>
          <img
            src={result === "dog" ? dogImg : catImg}
            alt={dict.label[result]}
            style={{ width: 240, height: 240, objectFit: 'contain', margin: '16px auto' }}
          />
          <div className={`survey-result-animal ${result}`}>{dict.label[result]}</div>
          <div className="survey-result-desc">
            {dict.result[result]}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {Header}
      <div style={{ height: 56 }} />
      <div className="survey-container">
        <div className="survey-title">{dict.title}</div>
        <div className="survey-question">{dict.questions[step].q}</div>
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
    </>
  );
}
