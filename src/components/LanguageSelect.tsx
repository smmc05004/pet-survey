import React from "react";
import { langs } from "../features/survey/surveyDict";

type Props = {
  lang: 'ko' | 'en';
  selectLangLabel: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function LanguageSelect({ lang, selectLangLabel, onChange }: Props) {
  return (
    <div style={{ position: 'relative', display: 'inline-block', minWidth: 120 }}>
      <label style={{ marginRight: 8, fontWeight: 500 }}>{selectLangLabel}</label>
      <select
        value={lang}
        onChange={onChange}
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
}
