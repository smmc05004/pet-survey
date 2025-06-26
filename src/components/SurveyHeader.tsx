import React from "react";
import LanguageSelect from "./LanguageSelect";

type Props = {
  lang: 'ko' | 'en';
  selectLangLabel: string;
  onLangChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function SurveyHeader({ lang, selectLangLabel, onLangChange }: Props) {
  return (
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
      <LanguageSelect lang={lang} selectLangLabel={selectLangLabel} onChange={onLangChange} />
    </header>
  );
}
