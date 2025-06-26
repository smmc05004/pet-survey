import React from "react";

type Props = {
  title: string;
  question: string;
  options: string[];
  onOptionClick: (idx: number) => void;
};

export default function SurveyQuestion({ title, question, options, onOptionClick }: Props) {
  return (
    <div className="survey-container">
      <div className="survey-title">{title}</div>
      <div className="survey-question">{question}</div>
      {options.map((opt, idx) => (
        <button
          key={idx}
          className="survey-btn"
          onClick={() => onOptionClick(idx)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
