# FindPet: 강아지 vs 고양이 설문 추천 앱

이 프로젝트는 React + TypeScript + Vite 기반의 간단한 설문조사 웹앱입니다. 사용자의 성향에 따라 강아지와 고양이 중 더 어울리는 반려동물을 추천해줍니다.

## 주요 기능
- 3지선다 설문 문항(한국어/영어 지원, 옵션 랜덤)
- 결과에 따라 동물 이미지와 설명 제공
- 상단 고정 언어 선택(커스텀 셀렉트 박스)
- 반응형, 모던 UI
- SEO 최적화 (react-helmet-async)
- Cloudflare Pages 등 정적 호스팅 배포 최적화

## 사용 방법

### 1. 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```

### 3. 빌드
```bash
npm run build
```

### 4. 배포
- Cloudflare Pages, Netlify, Vercel 등 정적 호스팅 서비스에 `dist` 폴더를 배포

## 주요 라이브러리
- React 19
- TypeScript
- Vite
- react-helmet-async (SEO)

## 폴더 구조
```
src/
  assets/         # 동물 이미지
  App.tsx         # 앱 엔트리
  Survey.tsx      # 설문 전체(상태/화면/SEO)
  App.css         # 메인 스타일
```

## 라이선스 및 이미지 출처
- 동물 이미지는 Unsplash, Pixabay 등 무료 상업적 사용 가능 이미지를 사용했습니다.
- 코드 및 UI는 MIT 라이선스입니다.

---

문의 및 피드백은 이슈로 남겨주세요!
