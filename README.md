# upnl-homepage-next

[Next.js](https://nextjs.org/)로 작성한 UPnL 홈페이지

## 개발용 서버 시작 (Docker Compose 사용)

```bash
git clone git@github.com:upnl/upnl-homepage-next.git
cd upnl-homepage-next

docker-compose up -d

# Prisma Migration 적용
DATABASE_URL="mysql://upnl:password@localhost:3306/upnl_db" npx prisma migrate deploy
```

## DB schema 수정 (Prisma migrate 사용)

```bash
# prisma/schema.prisma 수정

# schema.prisma 포매팅
npx prisma format

# DB 띄우고 migration 파일 생성
docker-compose up -d mysql
## --name 옵션으로 migration name 입력 가능
## --create-only 옵션을 붙이면 DB 변경 없이 migration.sql 파일만 생성
## root가 아닌 upnl 계정을 사용하면 shadow database 문제가 발생할 수 있음
DATABASE_URL="mysql://root:rootpassword@localhost:3306/upnl_db" npx prisma migrate dev
docker-compose down
```

- `schema.prisma`의 column 이름을 바꿀 경우 Prisma는 column을 `DROP`하고 새로 만드는 방식으로 migrate한다. 이렇게 하면 해당 column 정보가 전부 날아가 버리므로, `--create-only`으로 먼저 `migration.sql`을 만든 다음 쿼리를 직접 `ALTER RENAME`으로 수정해야 한다.
