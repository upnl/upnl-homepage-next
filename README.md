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

## PostgreSQL -> local MySQL DB migration

- 로컬에 `ts-node` 필요
- 우선 로컬에 PostgreSQL 컨테이너를 하나 띄우고 덤프된 데이터를 집어넣음
  - docker-compose.yml의 `upnl-postgres` 컨테이너를 uncomment하고 실행
  - Postgresql에서 dump된 파일을 `docker/postgres` 폴더 안에 `init.sql`이라는 이름으로 복사하기
  - `upnl-postgres` 컨테이너 안에 들어가기 (`docker exec -it upnl-postgres /bin/sh`)
  - `psql --username=upnl postgres < /var/lib/postgresql/data/init.sql` 실행
    - `psql -U upnl postgres`로 DB에 접속해서 `\dt` 를 입력했을 때 테이블들이 쿼리되면 데이터들이 잘 들어간 것
    - DB에 접속한 상태에서 `select \* from admin;` 같은 것으로 쿼리해볼 수 있음
    - DB에 접속한 상태에서 `\q`로 나올 수 있음
- PostgreSQL에서 MySQL로 데이터 migration
  - `npx prisma generate --schema prisma-psql/schema.prisma --allow-no-models`로 PostgreSQL용 Prisma client 생성
  - `DATABASE_URL="mysql://upnl:password@localhost:3306/upnl_db" DATABASE_URL_PSQL="postgres://upnl:passwd@localhost:5432/postgres" ts-node --compiler-options '{"module":"CommonJS"}' prisma-psql/migration.ts`로 데이터 migration
