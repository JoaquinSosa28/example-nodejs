FROM node:16.15.0-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm ci

ENTRYPOINT ["node", "index.js"]