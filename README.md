# Gumbo's Portfolio

[https://resume.gumbo.kr](https://resume.gumbo.kr)

### 디자인 참고

[NES.css](https://nostalgic-css.github.io/NES.css/)

### 리소스

[MarioUniverse](https://www.mariouniverse.com/)

### 사용기술

#### TypeScript, React

### 최적화

1. React 번들 파일 다운로드 이전, index.html에 loading 화면 구현
2. 폰트 최적화
    - 폰트 깜빡임 현상을 방지하기 위해서, font-display : block
    - 'DungGeunMo' 기본 폰트 1.9MB => 서브셋 사용 243KB
3. 리소스(이미지, 음악) 프리로딩
    - 장면별 동기, 비동기 다운로드 구현
        - A화면[리소스 1, 리소스2, 리소스3... // 병렬 다운로드] => 모두 완료 => B화면

4. 번들파일 최적화
    - import 모듈 크기 최적화
   ``` javascript
   import {debounce} from "lodash";
   // debounce만 사용
   import debounce from "lodash/debounce";
   ```

### Canvas API

1. 그림 그려지는 순서에 맞게 이미지 동기적 로드
    - 커튼 -> 바닥 -> 구름 -> 마리오 -> 블럭
2. 객체지향적으로 cavas object 구현 => 충돌 이벤트 구현
3. canvas 렌더링
    - 커튼 부분 : 이미지 로딩 완료 시 - 1회 그림, 커튼 이동 액션은 transform 사용
    - 게임 부분 : requestAnimationFrame 사용, 화면 주사율마다 애니메이션 다름 => setInterval 사용 재귀적으로 그림 그림
    - import 모듈 크기 최적화
   ``` javascript
   import {debounce} from "lodash";
   // debounce만 사용
   import debounce from "lodash/debounce";
   ```

### 배포

main브랜치 커밋 -> 젠킨스 -> 배포
