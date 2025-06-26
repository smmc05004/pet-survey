import React from "react";
import dogImg from '../assets/dog.jpg';
import catImg from '../assets/cat.jpg';

type Props = {
  result: "dog" | "cat";
  label: { dog: string; cat: string };
  desc: string;
  resultTitle: string;
};

export default function SurveyResult({ result, label, desc, resultTitle }: Props) {
  return (
    <div className="survey-container">
      <div className="survey-result-title">{resultTitle}</div>
      <img
        src={result === "dog" ? dogImg : catImg}
        alt={label[result]}
        style={{ width: 240, height: 240, objectFit: 'contain', margin: '16px auto' }}
      />
      <div className={`survey-result-animal ${result}`}>{label[result]}</div>
      <div className="survey-result-desc">
        {desc}
      </div>
    </div>
  );
}
