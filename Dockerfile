FROM node:16.13-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ./src ./src
COPY ./static ./static
COPY ./svelte.config.js ./
COPY ./tsconfig.json ./

RUN npm run build

EXPOSE 3000

ENV HOST=0.0.0.0

CMD [ "node", "build/index.js" ]
