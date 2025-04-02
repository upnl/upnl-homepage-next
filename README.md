# upnl-homepage-next

[Next.js](https://nextjs.org/)로 작성한 UPnL 홈페이지

## 개발용 서버 시작 (Docker Compose 사용)

```bash
git clone git@github.com:upnl/upnl-homepage-next.git
cd upnl-homepage-next

# package 설치 + Prisma Client 생성 (postinstall)
pnpm install

# DB 먼저 띄우고 Prisma Migration 적용
docker-compose up -d mysql
DATABASE_URL="mysql://upnl:password@localhost:3306/upnl_db" npx prisma migrate deploy

docker-compose up -d
```
