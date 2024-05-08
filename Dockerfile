# base image 설정(as build 로 완료된 파일을 밑에서 사용할 수 있다.)
FROM node:20-alpine as build

# 컨테이너 내부 작업 디렉토리 설정
WORKDIR /app

# 현재 디렉토리 파일들을 컨테이너 내부로 전부 복사
COPY .. .

# pnpm 설치 및 의존성 설치
RUN npm install -g pnpm@9.0.6
RUN pnpm install

RUN pnpm build

# 배포 환경
FROM nginx:stable-alpine

# 이전 빌드 단계에서 빌드한 결과물을 /usr/share/nginx/html 으로 복사한다.
COPY --from=build /app/dist /usr/share/nginx/html

# 기본 nginx 설정 파일을 삭제한다. (custom 설정과 충돌 방지)
RUN rm /etc/nginx/conf.d/default.conf

# custom 설정파일을 컨테이너 내부로 복사한다.
COPY nginx/nginx.conf /etc/nginx/conf.d

# 컨테이너의 80번 포트를 열어준다.
EXPOSE 80

# nginx 서버를 실행하고 백그라운드로 동작하도록 한다.
CMD ["nginx", "-g", "daemon off;"]