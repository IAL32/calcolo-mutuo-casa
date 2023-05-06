FROM node:18.16-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY ./src ./src
COPY ./static ./static
COPY ./vite.config.ts ./
COPY ./svelte.config.js ./
COPY ./tsconfig.json ./

RUN npm run build

EXPOSE 3000

ENV HOST=0.0.0.0

CMD [ "node", "build/index.js" ]
