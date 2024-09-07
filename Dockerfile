FROM node:20-bookworm

WORKDIR /e2e

COPY package.json /e2e/
COPY playwright.config.ts /e2e/
COPY src /e2e/src/

RUN npm install
RUN npx -y playwright@1.47.0 install --with-deps

EXPOSE 3000

CMD ["npx", "playwright", "test"]

