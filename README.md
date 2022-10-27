# Gumbo의 포트폴리오

## 주요 포인트

### (1) index.html

1. React 번들 파일 다운로드 이전, index.html에 loading 화면 구현
2. 폰트 최적화
    - 폰트 깜빡임 현상을 방지하기 위해서, font-display : block
    - 'DungGeunMo' 폰트 UnicodeRange 사용 한글만 다운로드

### (2) 첫번째 장면(마리오가 나오는 부분)

1. 그림 그려지는 순서에 맞게 이미지 동기적 로드
    - 커튼 -> 바닥 -> 구름 -> 마리오 -> 블럭
2. 객체지향적으로 object modeling, 충돌 이벤트 구현
3. canvas 렌더링
    - 커튼 부분 : 이미지 로딩 완료 시 - 1회 그림
    - 게임 부분 : requestAnimationFrame 사용, 재귀적으로 그림 그림
