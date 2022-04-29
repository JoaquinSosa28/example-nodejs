FROM node:16.15.0-alpine

EXPOSE 3000
WORKDIR /usr/src/app
COPY . .
RUN npm ci

ENTRYPOINT ["node", "index.js"]