FROM node:20-bookworm

WORKDIR /e2e/src

COPY package*.json ./

RUN npx -y playwright@1.47.0 install --with-deps

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npx", "playwright", "test"]

