FROM node:20.18.2-bullseye

ENV BASE_URL='https://www.saucedemo.com'

WORKDIR /e2e

COPY package*.json .
COPY playwright.config.ts .

RUN npm install

COPY ./src ./src

RUN npx playwright install --with-deps chromium webkit

CMD ["npm","start"]

