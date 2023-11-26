#!make

run:
	npm run start:dev

studio:
	npx prisma studio

migrate:
	npx prisma migrate dev && npx prisma generate