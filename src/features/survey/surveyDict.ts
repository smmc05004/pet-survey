// ko/en 다국어 설문 데이터
export const ko = {
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

export const en = {
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

export const langs = [
  { value: 'ko', label: '한국어' },
  { value: 'en', label: 'English' }
];
