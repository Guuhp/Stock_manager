#!make

run:
	npm run start:dev

run-swc:
	npm run start:swc

studio:
	npx prisma studio

migrate:
	npx prisma migrate dev && npx prisma generate