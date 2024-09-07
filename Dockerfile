FROM node:20-bookworm

WORKDIR /e2e/src

COPY package*.json ./
COPY . .

RUN npm install
RUN npx -y playwright@1.47.0 install --with-deps

EXPOSE 3000

CMD ["npx", "playwright", "test"]

