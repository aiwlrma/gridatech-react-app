# 간호학생용 주사 실습 학습 앱

React Native로 구현된 간호학생을 위한 주사 실습 학습 앱입니다.

## 주요 기능

- **진행 상황 추적**: 3단계 학습 프로세스 (물품 준비 → 주사 부위 선정 → 약물 투약)
- **성적 요약**: 항목별 점수 및 진행률 시각화
- **추천 학습**: 개인화된 학습 추천 시스템
- **평가 피드백**: 강점 및 보완점 상세 분석
- **교수자 피드백**: 실시간 피드백 확인

## 화면 구성

### 1. Header Component
- 사용자 정보 표시 (이름, ID)
- 알림 기능

### 2. ProgressIndicator Component
- 단계별 진행 상황 표시
- 진행률 바 및 퍼센트 표시

### 3. GradeSummary Component
- 막대 차트로 항목별 점수 표시
- 원형 차트로 전체 점수 표시

### 4. RecommendedLearning Component
- 개인화된 학습 추천 목록
- 반복 학습 권장 표시

### 5. EvaluationDetails Component
- 강점 및 보완점 상세 분석
- 시각적 아이콘으로 구분

### 6. ActionButtons Component
- 다시 학습하기 버튼
- 교수자 피드백 확인 버튼

### 7. BottomNavigation Component
- 홈, 통계, 메시지, 설정 탭

## 설치 및 실행

```bash
# 의존성 설치
npm install

# iOS 실행
npm run ios

# Android 실행
npm run android
```

## 기술 스택

- React Native 0.72.6
- TypeScript
- React Native Vector Icons
- React Native Chart Kit

## 디자인 시스템

- **주 색상**: #9C27B0 (보라색)
- **보조 색상**: #FF9800 (주황색)
- **배경색**: #F8F9FA (연한 회색)
- **텍스트 색상**: #333333 (진한 회색)

## 프로젝트 구조

```
src/
├── components/
│   ├── Header.tsx
│   ├── ProgressIndicator.tsx
│   ├── GradeSummary.tsx
│   ├── RecommendedLearning.tsx
│   ├── EvaluationDetails.tsx
│   ├── ActionButtons.tsx
│   └── BottomNavigation.tsx
└── App.tsx
```
