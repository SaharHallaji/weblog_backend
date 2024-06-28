FROM node:18-alpine

RUN yarn global add pnpm

WORKDIR /app
COPY package.json pnpm-lock.yaml ./


RUN pnpm install

COPY . .

EXPOSE 8080

CMD pnpm start:dev