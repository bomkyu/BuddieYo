FROM node:22-alpine

# 작업 디렉토리 설정
WORKDIR /app

# 종속성 설치
COPY package.json package-lock.json ./
RUN npm ci

# 앱 코드 복사
COPY . .

# 환경변수 기반 핫 리로드 지원
ENV WATCHPACK_POLLING=true

# 개발 서버 실행
CMD ["npm", "run", "dev"]

EXPOSE 3000
# ######################
# 도커 주요 명령어 모음
# ######################

# 1. 도커 이미지 빌드
# docker build -t <이미지 이름>:<태그> .

# 2. 도커 컨테이너 실행
# docker run -d -p <호스트 포트>:<컨테이너 포트> <이미지 이름>:<태그>

# 3. 실행 중인 컨테이너 확인
# docker ps

# 4. 모든 컨테이너 확인 (실행 중인 + 중지된 컨테이너)
# docker ps -a

# 5. 컨테이너 시작
# docker start <컨테이너 ID 또는 이름>

# 6. 컨테이너 중지
# docker stop <컨테이너 ID 또는 이름>

# 7. 컨테이너 삭제
# docker rm <컨테이너 ID 또는 이름>

# 8. 컨테이너 로그 확인
# docker logs <컨테이너 ID 또는 이름>

# 9. 이미지 목록 확인
# docker images

# 10. 이미지 삭제
# docker rmi <이미지 ID 또는 이름>

# 11. 이미지 강제 삭제
# docker rmi -f <이미지 ID 또는 이름>

# 12. 이미지 실행 후 쉘 접속
# docker run -it <이미지 이름> /bin/sh

# 13. 도커 시스템 정리 (사용하지 않는 리소스 삭제)
# docker system prune

# 14. 도커 볼륨 목록 확인
# docker volume ls

# 15. 도커 네트워크 목록 확인
# docker network ls

# 16. 도커 정보 확인 (전체 상태 확인)
# docker info

# 17. 도커 로그아웃
# docker logout

# 18. 도커 로그인
# docker login