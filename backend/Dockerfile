FROM node:18-alpine

# 작업 디렉토리 설정
WORKDIR /app

# package.json, package-lock.json 복사 (의존성 설치를 위해)
COPY package.json package-lock.json ./

# 의존성 설치
RUN npm ci --production

# 나머지 백엔드 코드 복사
COPY . .

# 환경변수 파일도 필요하다면 복사 (env_file 옵션이 있으니 보통 필요 없음)

# 백엔드가 4000 포트 사용하므로 노출
EXPOSE 4000

# 개발 모드 실행 (docker-compose.yml에서 command로 덮어쓸 수 있음)
CMD ["npm", "run", "dev"]