import React, { useState } from "react";
import { Helmet } from "react-helmet";
import './App.css';
import SurveyHeader from './components/SurveyHeader';
import SurveyQuestion from './components/SurveyQuestion';
import SurveyResult from './components/SurveyResult';
import { ko, en } from './features/survey/surveyDict';
import { shuffle, getResult } from './features/survey/surveyUtils';

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

  return (
    <>
      <Helmet>
        <title>{dict.title}</title>
        <meta name="description" content={lang === 'ko' ? '간단한 설문으로 나에게 어울리는 반려동물이 강아지인지 고양이인지 추천해드립니다.' : 'A simple survey to find out whether a dog or a cat suits you better.'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="findpet" />
        <link rel="canonical" href={window.location.href} />
        {/* Open Graph */}
        <meta property="og:title" content={dict.title} />
        <meta property="og:description" content={lang === 'ko' ? '간단한 설문으로 나에게 어울리는 반려동물이 강아지인지 고양이인지 추천해드립니다.' : 'A simple survey to find out whether a dog or a cat suits you better.'} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={window.location.origin + '/src/assets/dog.jpg'} />
        <meta property="og:locale" content={lang === 'ko' ? 'ko_KR' : 'en_US'} />
        <meta property="og:url" content={window.location.href} />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={dict.title} />
        <meta name="twitter:description" content={lang === 'ko' ? '간단한 설문으로 나에게 어울리는 반려동물이 강아지인지 고양이인지 추천해드립니다.' : 'A simple survey to find out whether a dog or a cat suits you better.'} />
        <meta name="twitter:image" content={window.location.origin + '/src/assets/dog.jpg'} />
      </Helmet>
      <SurveyHeader lang={lang} selectLangLabel={dict.selectLang} onLangChange={handleLangChange} />
      <div style={{ height: 56 }} />
      {result ? (
        <SurveyResult
          result={result}
          label={dict.label}
          desc={dict.result[result]}
          resultTitle={dict.resultTitle}
        />
      ) : (
        <SurveyQuestion
          title={dict.title}
          question={dict.questions[step].q}
          options={shuffledOptionsList[step]}
          onOptionClick={handleOptionClick}
        />
      )}
    </>
  );
}
